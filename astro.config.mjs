import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://research-data-management.github.io/research-software-licensing/',
  integrations: [
    starlight({
      title: "Research software licensing guide",
      customCss: [
        './src/styles/custom.css'
      ],
      sidebar: [
        { label:"This guide", link: "/"},
        { slug: "check_prerequisites"},
        { slug: "complications"},
        { label: "Choose a license",
          autogenerate: { directory: "choose_a_license" }
        },
        { slug: "faq" }
      ],
      social: {
        github: 'https://github.com/research-data-management/research-software-licensing'
      },
      components: {
        // Override the default `Footer` component.
        Footer: './src/components/MyFooter.astro',
      },
      lastUpdated: true
    }),
  ],
});
