module.exports = {
  stories: ["../stories/**/*.stories.[tj]sx"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [require.resolve("babel-preset-react-app")]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
