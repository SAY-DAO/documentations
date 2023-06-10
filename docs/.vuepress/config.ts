
import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: 'Vue Docs',
  description: 'Building documentations with Vue using VuePress',
  locales: {
    // As a special case, the default locale can use '/' as its path.
    '/': {

      head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
      lang: 'fa-IR',
      title: 'SAY DAO',
      description: 'اسناد توسعه‌‌',
    },
    '/en/': {
      head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        logo: '/images/logo2.png',
        navbar: [
          {
            text: 'API', link: '/api/',
          },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'مددکاران و سمن‌ها',
              children: ['/guide/wallet.md', '/guide/smart-contract.md'],
            },
          ],
        },
      },
      '/en/': {
        selectLanguageName: 'English',
        logo: '/images/logo2.png',
        navbar: [
          { text: 'Getting Started', link: '/getting-started/' },
          {
            text: 'API', link: '/api/',
          },
        ],
        sidebar: [
          {
            text: 'Wallets',
            link: '/guide/',
            children: [
              {
                text: 'github',
                link: 'https://github.com',
                children: [],
              },
              // string - page file path
              '/guide/README.md',
            ],
          },
          // string - page file path
          '/guide/README.md',
        ],
      },
    },

  }),
})

