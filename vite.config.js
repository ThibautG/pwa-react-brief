import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {VitePWA} from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss,
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'IoT Web App',
        short_name: 'PWA',
        description: 'Application Progressive Web App',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/vite.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**//{js,jsx,css,html,ico,png,svg}'],
        runtimeCaching: [{
          urlPattern: /^https:\/\/iot.olasserre.dev-campus\.fr\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'iot',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
})
