import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const tsdownBin = join(
  root,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'tsdown.cmd' : 'tsdown',
);

const pnpmCommand = process.env.npm_execpath
  ? [process.execPath, process.env.npm_execpath]
  : [process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'];

const isProductionInstall =
  process.env.NODE_ENV === 'production' ||
  process.env.npm_config_production === 'true' ||
  process.env.npm_config_dev === 'false' ||
  process.env.npm_config_only === 'production';

if (isProductionInstall || !existsSync(tsdownBin)) {
  console.log(
    '[postinstall] Skip workspace stub build because dev dependencies are not installed.',
  );
  process.exit(0);
}

const [command, ...commandArgs] = pnpmCommand;
const result = spawnSync(
  command,
  [...commandArgs, '-r', 'run', '--if-present', 'stub'],
  {
    stdio: 'inherit',
  },
);

process.exit(result.status ?? 1);
