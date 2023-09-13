import { defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { palettePlugin } from "@vuepress/plugin-palette";

const isProd = process.env.NODE_ENV === "production";

export default {
  locales: {
    // As a special case, the default locale can use '/' as its path.
    "/": {
      head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
      lang: "fa-IR",
      title: "اسناد توسعه‌‌",
      // description: "---",
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
        lastUpdatedText: "آخرین به‌روزرسانی",
        // navbar: [
        //   {
        //     text: "API",
        //     link: "/api/",
        //   },
        // ],
        sidebar: {
          "/guide/": [
            {
              text: "مددکاران و سمن‌ها",
              children: [
                "/guide/basics.md",
                "/guide/wallet.md",
                "/guide/keywords.md",
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
