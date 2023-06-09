import { fileURLToPath, URL } from "url";
import * as path from "path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@composables": path.resolve(__dirname, "./src/composables"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@plugins": path.resolve(__dirname, "./src/plugins"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  // server: {
  //   open: true,
  //   origin: "https://ecommerce-hekto-dl.vercel.app/api/admin/products",
  // },
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      "/foo": "https://ecommerce-hekto-dl.vercel.app",
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      // "/api": {
      //   target: "https://ecommerce-hekto-dl.vercel.app",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
      // with RegEx: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
      // Using the proxy instance
      "/api": {
        target: "http://jsonplaceholder.typicode.com/api",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
        },
      },
      // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      "/socket.io": {
        target: "ws://localhost:5174",
        ws: true,
      },
    },
  },
});
