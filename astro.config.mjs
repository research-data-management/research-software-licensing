import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Research software licensing guide",
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
