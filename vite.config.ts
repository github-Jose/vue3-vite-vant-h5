import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需引入vant
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: path.resolve('src') + '/'
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components')
      }
    ]
  }
})
