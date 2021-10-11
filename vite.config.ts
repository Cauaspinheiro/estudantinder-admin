import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  define: {
    __VERSION__: JSON.stringify(process.env.npm_package_version),
    __DEV__: process.env.NODE_ENV !== 'production',
  },
})
