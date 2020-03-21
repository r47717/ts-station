const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    "HACK: Removing `minimize` option from `css-loader` entries in Webpack config"
  );
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === "css-loader" && u.options) {
          delete u.options.minimize;
        }
        if (u.loader === "stylus-loader" && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withCss(
  withSass({
    webpack(config) {
      HACK_removeMinimizeOptionFromCssLoaders(config);
      return config;
    }
  })
);
