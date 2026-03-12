import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Resolve Figma-exported asset imports like "figma:asset/<hash>.png"
      'figma:asset': path.resolve(__dirname, './src/assets'),
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        photoCamAIPrivacyPolicy: path.resolve(__dirname, 'photocamai/privacy-policy/index.html'),
        photoCamAITermsOfUse: path.resolve(__dirname, 'photocamai/terms-of-use/index.html'),
        retroCamNeoPrivacyPolicy: path.resolve(__dirname, 'retrocamneo/privacy-policy/index.html'),
        retroCamNeoTermsOfUse: path.resolve(__dirname, 'retrocamneo/terms-of-use/index.html'),
        visualLabXPrivacyPolicy: path.resolve(__dirname, 'visuallabx/privacy-policy/index.html'),
        visualLabXTermsOfUse: path.resolve(__dirname, 'visuallabx/terms-of-use/index.html'),
        wallpapersPrivacyPolicy: path.resolve(__dirname, 'wallpapers/privacy-policy/index.html'),
        wallpapersTermsOfUse: path.resolve(__dirname, 'wallpapers/terms-of-use/index.html'),
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
