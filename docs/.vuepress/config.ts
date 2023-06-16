import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "vuepress";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  title: "Vue Docs",
  description: "Building documentations with Vue using VuePress",
  locales: {
    // As a special case, the default locale can use '/' as its path.
    "/": {
      head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
      lang: "fa-IR",
      title: "SAY DAO",
      description: "اسناد توسعه‌‌",
    },
    "/en/": {
      head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
      lang: "en-US",
      title: "SAY DAO",
      description: "Documentations for App and Panel",
    },
  },
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'SAY-DAO/road-map-docs',
    docsDir: 'docs',
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
    locales: {
      "/": {
        selectLanguageName: "Farsi",
        logo: "/images/logo2.png",
        navbar: [
          {
            text: "API",
            link: "/api/",
          },
        ],
        sidebar: {
          "/guide/": [
            {
              text: "مددکاران و سمن‌ها",
              children: ["/guide/wallet.md", "/guide/keywords.md"],
            },
          ],
        },
      },
      "/en/": {
        selectLanguageName: "English",
        logo: "/images/logo2.png",
        navbar: [
          { text: "Getting Started", link: "/getting-started/" },
          {
            text: "API",
            link: "/api/",
          },
        ],
        sidebar: [
          {
            text: "Wallets",
            link: "/guide/",
            children: [
              {
                text: "github",
                link: "https://github.com",
                children: [],
              },
              // string - page file path
              "/guide/README.md",
            ],
          },
          // string - page file path
          "/guide/README.md",
        ],
      },
    },
  }),
  editLinks: false,
  docsRepo: 'SAY-DAO/road-map-docs',
  // use plugins
  plugins: [
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },

    }),

    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './theme/components'),
    }),
  ],

});
