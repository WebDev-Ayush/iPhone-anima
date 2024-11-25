import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
   authToken: "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",
    org: "tripie",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})
