import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.guidepostpresenter.com',
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [
    starlight({
      title: 'Guidepost Help',
      description: 'How to build and run church services with Guidepost, the presentation app for Mac.',
      logo: {
        light: './src/assets/mark-on-light.svg',
        dark: './src/assets/mark-on-dark.svg',
        alt: 'Guidepost',
      },
      favicon: '/favicon.svg',
      customCss: ['@fontsource-variable/inter', './src/styles/tokens.css', './src/styles/theme.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
      lastUpdated: false,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0a0a12', media: '(prefers-color-scheme: dark)' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#f3f3f7', media: '(prefers-color-scheme: light)' } },
      ],
      sidebar: [
        {
          label: 'Get started',
          items: [
            { label: 'Welcome', link: '/' },
            'start/install',
            'start/tour',
            'start/first-service',
            'start/concepts',
          ],
        },
        {
          label: 'Build a service',
          items: [
            'design/workspace',
            'design/slides-and-groups',
            'design/adding-slides',
            'design/scripture',
            'design/songs',
            'design/media',
            'design/canvas',
            'design/themes',
            'design/backgrounds',
            'design/saved-slides',
          ],
        },
        {
          label: 'Run a service',
          items: [
            'present/workspace',
            'present/going-live',
            'present/navigation',
            'present/holds',
            'present/messages',
            'present/timers',
            'present/cues',
            'present/video',
            'present/live-changes',
          ],
        },
        {
          label: 'Screens',
          items: ['screens/screens-panel', 'screens/airplay', 'screens/stage-display', 'screens/network-viewers', 'screens/what-guidepost-sends'],
        },
        {
          label: 'Library',
          items: [
            'library/workspace',
            'library/songs',
            'library/importing-songs',
            'library/media',
            'library/bibles',
            'library/organizing',
          ],
        },
        {
          label: 'Files',
          items: ['files/saving', 'files/sharing'],
        },
        {
          label: 'Reference',
          items: [
            'reference/search',
            'reference/keyboard-shortcuts',
            'reference/settings',
            'reference/copyright',
            'reference/mac-integration',
            'reference/licensing',
            'reference/updates',
            'reference/troubleshooting',
            'reference/support',
          ],
        },
      ],
    }),
  ],
});
