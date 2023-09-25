import { defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { palettePlugin } from "@vuepress/plugin-palette";
import { resolve } from "path";

const isProd = process.env.NODE_ENV === "production";

export default {
  configureWebpack: {
    resolve: {
      alias: {
        "@fonts": resolve("fonts"),
      },
    },
  },
  locales: {
    // As a special case, the default locale can use '/' as its path.
    "/": {
      head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
      lang: "fa-IR",
      title: "SAY DAO",
      description: "اسناد توسعه‌",
    },
    // "/en/": {
    //   head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
    //   lang: "en-US",
    // title: "SAY DAO",
    //   description: "Documentations for App and Panel",
    // },export default {
  },
  theme: defaultTheme({
    colorMode: "light",
    logo: "/images/logo.png",
    repo: "SAY-DAO/documentations",
    docsDir: "docs",
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      prismjs: !isProd,
    },
    locales: {
      "/": {
        selectLanguageName: "Farsi",
        logo: "/images/logo.png",
        logoDark: "/images/logo2.png",
        editLinkText: "ویرایش این صفحه",
        lastUpdated: true,
        lastUpdatedText: "آخرین به‌روز رسانی",
        contributors: false,
        navbar: [
          {
            text: "خانه",
            link: "/",
          },
          {
            text: "API",
            link: "https://nest.saydao.org/docs",
          },
        ],
        sidebar: {
          "/guide/ngo": [
            {
              text: "مددکاران و سمن‌ها",
              children: [
                "/guide/ngo/intro.md",
                "/guide/ngo/needModule.md",
                "/guide/ngo/blockchain.md",
                "/guide/ngo/wallet.md",
                "/guide/ngo/signature.md",
                "/guide/ngo/panel.md",
                "/guide/ngo/register.md",
                "/guide/ngo/references.md",
              ],
            },
          ],
          "/guide/family": [
            {
              text: "خانواده‌های مجازی",
              children: [
                "/guide/family/intro.md",
                "/guide/family/needModule.md",
                "/guide/family/blockchain.md",
                "/guide/family/wallet.md",
                "/guide/family/signature.md",
                "/guide/family/dapp.md",
                "/guide/family/references.md",
              ],
            },
          ],
        },
      },
      // "/en/": {
      //   selectLanguageName: "English",
      //   logo: "/images/logo2.png",
      //   navbar: [
      //     { text: "Getting Started", link: "/getting-started/" },
      //     {
      //       text: "API",
      //       link: "/api/",
      //     },
      //   ],
      //   sidebar: [
      //     {
      //       text: "Wallets",
      //       link: "/guide/",
      //       children: [
      //         {
      //           text: "github",
      //           link: "https://github.com",
      //           children: [],
      //         },
      //         // string - page file path
      //         "/guide/README.md",
      //       ],
      //     },
      //     // string - page file path
      //     "/guide/README.md",
      //   ],
      // },
    },
  }),
  editLinks: false,
  docsRepo: "SAY-DAO/documentations",
  // use plugins
  plugins: [
    // docsearchPlugin({
    //   appId: "34YFD9IUQ2",
    //   apiKey: "9a9058b8655746634e01071411c366b8",
    //   indexName: "vuepress",
    //   searchParameters: {
    //     facetFilters: ["tags:v2"],
    //   },
    // }),
    palettePlugin({ preset: "sass" }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./theme/components"),
    }),
  ],
};
