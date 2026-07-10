<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue';

import {
  AuthPageLayout,
  AuthenticationColorToggle,
  LanguageToggle,
  ThemeToggle,
} from '@vben/layouts';
import { preferences, updatePreferences } from '@vben/preferences';

import { $t } from '#/locales';

const appName = computed(() => preferences.app.name);
const logo = computed(() => preferences.logo.source);
const logoDark = computed(() => preferences.logo.sourceDark);

onBeforeMount(() => {
  updatePreferences({
    app: {
      authPageLayout: 'panel-center',
    },
  });
});
</script>

<template>
  <AuthPageLayout
    :app-name="appName"
    :logo="logo"
    :logo-dark="logoDark"
    :page-description="$t('authentication.pageDesc')"
    :page-title="$t('authentication.pageTitle')"
  >
    <template #toolbar>
      <div
        class="absolute top-4 right-2 z-10 flex-center rounded-3xl bg-accent px-3 py-1"
      >
        <AuthenticationColorToggle />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </template>
  </AuthPageLayout>
</template>
