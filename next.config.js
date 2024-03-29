// next.config.js
const { withPlugins } = require("next-compose-plugins");
const withVideos = require("next-videos");

// next.config.js
// module.exports = {
//   i18n: {
//     locales: ["en", "de", "tr"],
//     defaultLocale: "en",
//   },
// };

module.exports = withPlugins([withVideos], {
  i18n: {
    locales: ["en", "de", "tr"],
    defaultLocale: "en",
  },
});

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   env: {
//     NEXT_PUBLIC_ENV: "PRODUCTION", //your next configs goes here
//   },
// });
