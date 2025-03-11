import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      maxParallelFileOps: 2,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('@tanstack')) return 'tanstack-vendor';
            if (id.includes('lucide-react')) return 'icons-vendor';
            return 'vendor';
          }
          if (id.includes('src/components')) return 'components';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  plugins: [
    react({
      plugins: [],
      jsxImportSource: "react"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', 'lucide-react'],
    exclude: [],
    esbuildOptions: {
      target: 'es2020',
      supported: { 
        'top-level-await': true 
      }
    }
  }
});
