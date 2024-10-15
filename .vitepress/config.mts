import { defineConfig } from 'vitepress'
import {RSSOptions, RssPlugin} from 'vitepress-plugin-rss'

const RSS: RSSOptions = {
  title: 'zero',
  baseUrl: 'https://zero-docs.vercel.app',
  copyright: 'Copyright (c) 2021-present, zero',
  description: 'feedId:67840654578173952+userId:67737338736758784'
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [
      RssPlugin(RSS)
    ]
  }
})
