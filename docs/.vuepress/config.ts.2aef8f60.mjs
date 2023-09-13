// docs/.vuepress/config.ts
import { defaultTheme } from "vuepress";
import { path } from "@vuepress/utils";
import pkg from "@vuepress/plugin-register-components";
var __vite_injected_original_dirname = "/home/gbuntu/Documents/Code/SAY/2.0.0/road-map-docs/docs/.vuepress";
var { registerComponentsPlugin } = pkg;
var isProd = process.env.NODE_ENV === "production";
var config_default = {
  locales: {
    // As a special case, the default locale can use '/' as its path.
    "/": {
      head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
      lang: "fa-IR",
      title: "\u0627\u0633\u0646\u0627\u062F \u062A\u0648\u0633\u0639\u0647\u200C\u200C"
      // description: "---",
    }
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
    repo: "SAY-DAO/road-map-docs",
    docsDir: "docs",
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      prismjs: !isProd
    },
    locales: {
      "/": {
        selectLanguageName: "Farsi",
        logo: "/images/logo.png",
        logoDark: "/images/logo2.png",
        // navbar: [
        //   {
        //     text: "API",
        //     link: "/api/",
        //   },
        // ],
        sidebar: {
          "/guide/": [
            {
              text: "\u0645\u062F\u062F\u06A9\u0627\u0631\u0627\u0646 \u0648 \u0633\u0645\u0646\u200C\u0647\u0627",
              children: [
                "/guide/basics.md",
                "/guide/wallet.md",
                "/guide/keywords.md"
              ]
            }
          ]
        }
      }
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
    }
  }),
  editLinks: false,
  docsRepo: "SAY-DAO/road-map-docs",
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
    registerComponentsPlugin({
      componentsDir: path.resolve(__vite_injected_original_dirname, "./theme/components")
    })
  ]
};
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvZ2J1bnR1L0RvY3VtZW50cy9Db2RlL1NBWS8yLjAuMC9yb2FkLW1hcC1kb2NzL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9nYnVudHUvRG9jdW1lbnRzL0NvZGUvU0FZLzIuMC4wL3JvYWQtbWFwLWRvY3MvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2didW50dS9Eb2N1bWVudHMvQ29kZS9TQVkvMi4wLjAvcm9hZC1tYXAtZG9jcy9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB7IGRvY3NlYXJjaFBsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLWRvY3NlYXJjaFwiO1xuaW1wb3J0IHsgcGF0aCB9IGZyb20gXCJAdnVlcHJlc3MvdXRpbHNcIjtcblxuaW1wb3J0IHBrZyBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXJlZ2lzdGVyLWNvbXBvbmVudHMnO1xuY29uc3QgeyByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4gfSA9IHBrZztcblxuY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvY2FsZXM6IHtcbiAgICAvLyBBcyBhIHNwZWNpYWwgY2FzZSwgdGhlIGRlZmF1bHQgbG9jYWxlIGNhbiB1c2UgJy8nIGFzIGl0cyBwYXRoLlxuICAgIFwiL1wiOiB7XG4gICAgICBoZWFkOiBbW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2ltYWdlcy9mYXZpY29uLmljb1wiIH1dXSxcbiAgICAgIGxhbmc6IFwiZmEtSVJcIixcbiAgICAgIHRpdGxlOiBcIlx1MDYyN1x1MDYzM1x1MDY0Nlx1MDYyN1x1MDYyRiBcdTA2MkFcdTA2NDhcdTA2MzNcdTA2MzlcdTA2NDdcdTIwMENcdTIwMENcIixcbiAgICAgIC8vIGRlc2NyaXB0aW9uOiBcIi0tLVwiLFxuICAgIH0sXG4gICAgLy8gXCIvZW4vXCI6IHtcbiAgICAvLyAgIGhlYWQ6IFtbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCIvaW1hZ2VzL2Zhdmljb24uaWNvXCIgfV1dLFxuICAgIC8vICAgbGFuZzogXCJlbi1VU1wiLFxuICAgIC8vIHRpdGxlOiBcIlNBWSBEQU9cIixcbiAgICAvLyAgIGRlc2NyaXB0aW9uOiBcIkRvY3VtZW50YXRpb25zIGZvciBBcHAgYW5kIFBhbmVsXCIsXG4gICAgLy8gfSxleHBvcnQgZGVmYXVsdCB7XG4gIH0sXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgIGNvbG9yTW9kZTogXCJsaWdodFwiLFxuICAgIGxvZ286IFwiL2ltYWdlcy9sb2dvLnBuZ1wiLFxuICAgIHJlcG86IFwiU0FZLURBTy9yb2FkLW1hcC1kb2NzXCIsXG4gICAgZG9jc0RpcjogXCJkb2NzXCIsXG4gICAgdGhlbWVQbHVnaW5zOiB7XG4gICAgICAvLyBvbmx5IGVuYWJsZSBnaXQgcGx1Z2luIGluIHByb2R1Y3Rpb24gbW9kZVxuICAgICAgZ2l0OiBpc1Byb2QsXG4gICAgICBwcmlzbWpzOiAhaXNQcm9kLFxuICAgIH0sXG4gICAgbG9jYWxlczoge1xuICAgICAgXCIvXCI6IHtcbiAgICAgICAgc2VsZWN0TGFuZ3VhZ2VOYW1lOiBcIkZhcnNpXCIsXG4gICAgICAgIGxvZ286IFwiL2ltYWdlcy9sb2dvLnBuZ1wiLFxuICAgICAgICBsb2dvRGFyazogXCIvaW1hZ2VzL2xvZ28yLnBuZ1wiLFxuICAgICAgICAvLyBuYXZiYXI6IFtcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB0ZXh0OiBcIkFQSVwiLFxuICAgICAgICAvLyAgICAgbGluazogXCIvYXBpL1wiLFxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vIF0sXG4gICAgICAgIHNpZGViYXI6IHtcbiAgICAgICAgICBcIi9ndWlkZS9cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlx1MDY0NVx1MDYyRlx1MDYyRlx1MDZBOVx1MDYyN1x1MDYzMVx1MDYyN1x1MDY0NiBcdTA2NDggXHUwNjMzXHUwNjQ1XHUwNjQ2XHUyMDBDXHUwNjQ3XHUwNjI3XCIsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgXCIvZ3VpZGUvYmFzaWNzLm1kXCIsXG4gICAgICAgICAgICAgICAgXCIvZ3VpZGUvd2FsbGV0Lm1kXCIsXG4gICAgICAgICAgICAgICAgXCIvZ3VpZGUva2V5d29yZHMubWRcIixcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBcIi9lbi9cIjoge1xuICAgICAgLy8gICBzZWxlY3RMYW5ndWFnZU5hbWU6IFwiRW5nbGlzaFwiLFxuICAgICAgLy8gICBsb2dvOiBcIi9pbWFnZXMvbG9nbzIucG5nXCIsXG4gICAgICAvLyAgIG5hdmJhcjogW1xuICAgICAgLy8gICAgIHsgdGV4dDogXCJHZXR0aW5nIFN0YXJ0ZWRcIiwgbGluazogXCIvZ2V0dGluZy1zdGFydGVkL1wiIH0sXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgdGV4dDogXCJBUElcIixcbiAgICAgIC8vICAgICAgIGxpbms6IFwiL2FwaS9cIixcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICBdLFxuICAgICAgLy8gICBzaWRlYmFyOiBbXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgdGV4dDogXCJXYWxsZXRzXCIsXG4gICAgICAvLyAgICAgICBsaW5rOiBcIi9ndWlkZS9cIixcbiAgICAgIC8vICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAvLyAgICAgICAgIHtcbiAgICAgIC8vICAgICAgICAgICB0ZXh0OiBcImdpdGh1YlwiLFxuICAgICAgLy8gICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tXCIsXG4gICAgICAvLyAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgLy8gICAgICAgICB9LFxuICAgICAgLy8gICAgICAgICAvLyBzdHJpbmcgLSBwYWdlIGZpbGUgcGF0aFxuICAgICAgLy8gICAgICAgICBcIi9ndWlkZS9SRUFETUUubWRcIixcbiAgICAgIC8vICAgICAgIF0sXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICAvLyBzdHJpbmcgLSBwYWdlIGZpbGUgcGF0aFxuICAgICAgLy8gICAgIFwiL2d1aWRlL1JFQURNRS5tZFwiLFxuICAgICAgLy8gICBdLFxuICAgICAgLy8gfSxcbiAgICB9LFxuICB9KSxcbiAgZWRpdExpbmtzOiBmYWxzZSxcbiAgZG9jc1JlcG86IFwiU0FZLURBTy9yb2FkLW1hcC1kb2NzXCIsXG4gIC8vIHVzZSBwbHVnaW5zXG4gIHBsdWdpbnM6IFtcbiAgICAvLyBkb2NzZWFyY2hQbHVnaW4oe1xuICAgIC8vICAgYXBwSWQ6IFwiMzRZRkQ5SVVRMlwiLFxuICAgIC8vICAgYXBpS2V5OiBcIjlhOTA1OGI4NjU1NzQ2NjM0ZTAxMDcxNDExYzM2NmI4XCIsXG4gICAgLy8gICBpbmRleE5hbWU6IFwidnVlcHJlc3NcIixcbiAgICAvLyAgIHNlYXJjaFBhcmFtZXRlcnM6IHtcbiAgICAvLyAgICAgZmFjZXRGaWx0ZXJzOiBbXCJ0YWdzOnYyXCJdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9KSxcblxuICAgIHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbih7XG4gICAgICBjb21wb25lbnRzRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vdGhlbWUvY29tcG9uZW50c1wiKSxcbiAgICB9KSxcbiAgXSxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThXLFNBQVMsb0JBQW9CO0FBRTNZLFNBQVMsWUFBWTtBQUVyQixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxFQUFFLHlCQUF5QixJQUFJO0FBRXJDLElBQU0sU0FBUyxRQUFRLElBQUksYUFBYTtBQUV4QyxJQUFPLGlCQUFRO0FBQUEsRUFDYixTQUFTO0FBQUE7QUFBQSxJQUVQLEtBQUs7QUFBQSxNQUNILE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQyxDQUFDO0FBQUEsTUFDN0QsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBO0FBQUEsSUFFVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0Y7QUFBQSxFQUNBLE9BQU8sYUFBYTtBQUFBLElBQ2xCLFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGNBQWM7QUFBQTtBQUFBLE1BRVosS0FBSztBQUFBLE1BQ0wsU0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsS0FBSztBQUFBLFFBQ0gsb0JBQW9CO0FBQUEsUUFDcEIsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBT1YsU0FBUztBQUFBLFVBQ1AsV0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxnQkFDUjtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE2QkY7QUFBQSxFQUNGLENBQUM7QUFBQSxFQUNELFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQTtBQUFBLEVBRVYsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVVQLHlCQUF5QjtBQUFBLE1BQ3ZCLGVBQWUsS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLElBQzdELENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
