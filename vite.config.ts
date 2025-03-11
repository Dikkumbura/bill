import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Simplified config for production builds
export default defineConfig(({ command }) => {
  // Base configuration
  const config = {
    server: {
      host: "::",
      port: 8080,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      react({
        plugins: [],
        jsxImportSource: "react"
      })
    ]
  };

  // If building for production (Netlify), use minimal config to reduce memory usage
  if (command === 'build') {
    return {
      ...config,
      build: {
        target: 'es2020',
        minify: 'esbuild',
        cssMinify: true,
        reportCompressedSize: false,
        sourcemap: false, // Disable sourcemaps to save memory
        rollupOptions: {
          treeshake: true,
          maxParallelFileOps: 1,
          output: {
            manualChunks(id) {
              // Very simple chunking to reduce complexity
              if (id.includes('node_modules')) {
                return 'vendor';
              }
              return 'app';
            }
          }
        }
      }
    };
  }

  // For development, use regular config
  return {
    ...config,
    build: {
      target: 'es2020',
      minify: 'esbuild',
      cssMinify: true,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', 'lucide-react'],
      esbuildOptions: {
        target: 'es2020',
        supported: { 
          'top-level-await': true 
        }
      }
    }
  };
});
