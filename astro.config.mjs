import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 网站 URL
  site: 'https://n8nworkflow.com',
  
  // 集成
  integrations: [
    tailwind({
      // 应用基础样式
      applyBaseStyles: false,
    }),
    sitemap({
      // 自动生成站点地图
      filter: (page) => !page.includes('/api/'),
      changefreq: 'daily',
      priority: 0.7,
    }),
  ],
  
  // 输出配置
  output: 'static',
  
  // 构建配置
  build: {
    // 内联样式表小于此大小（字节）
    inlineStylesheets: 'auto',
  },
  
  // Vite 配置
  vite: {
    // 优化依赖
    optimizeDeps: {
      include: ['@supabase/supabase-js'],
    },
  },
  
  // 图片优化
  image: {
    domains: ['supabase.amastuces.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'supabase.amastuces.com',
      },
    ],
  },
  
  // Markdown 配置
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  // 内容集合配置
  content: {
    // 启用内容集合
    enabled: true,
  },
});
