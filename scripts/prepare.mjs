import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const lefthookBin = join(
  root,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'lefthook.cmd' : 'lefthook',
);

const pnpmCommand = process.env.npm_execpath
  ? [process.execPath, process.env.npm_execpath]
  : [process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'];

if (process.env.CI === 'true') {
  console.log('[prepare] Skip lefthook install in CI.');
  process.exit(0);
}

if (!existsSync(join(root, '.git'))) {
  console.log('[prepare] Skip lefthook install because .git does not exist.');
  process.exit(0);
}

if (!existsSync(lefthookBin)) {
  console.log(
    '[prepare] Skip lefthook install because dev dependencies are not installed.',
  );
  process.exit(0);
}

const [command, ...commandArgs] = pnpmCommand;
const result = spawnSync(
  command,
  [...commandArgs, 'exec', 'lefthook', 'install'],
  {
    stdio: 'inherit',
  },
);

process.exit(result.status ?? 1);
