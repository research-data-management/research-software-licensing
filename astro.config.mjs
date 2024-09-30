import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Research software licensing guide",
      logo: {
        src: './src/assets/THUENEN_SCREEN_logoonly_RGB.png',
        alt: "Logo of the Thünen Institute",
      },
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
