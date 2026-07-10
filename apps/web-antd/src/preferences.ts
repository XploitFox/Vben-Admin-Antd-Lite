import { defineOverridesPreferences } from '@vben/preferences';

const isEnabled = (value: unknown) => value === true || value === 'true';

/**
 * Application preference overrides.
 * Clear the preference cache after changing these values if runtime cache is enabled.
 */
export const overridesPreferences = defineOverridesPreferences({
  app: {
    authPageLayout: 'panel-center',
    defaultHomePath: '/analytics',
    name: import.meta.env.VITE_APP_TITLE,
  },
  copyright: {
    companyName: import.meta.env.VITE_APP_COPYRIGHT_COMPANY_NAME,
    companySiteLink: import.meta.env.VITE_APP_COPYRIGHT_COMPANY_SITE_LINK,
    date: import.meta.env.VITE_APP_COPYRIGHT_DATE,
    enable: isEnabled(import.meta.env.VITE_APP_COPYRIGHT_ENABLE),
  },
});
