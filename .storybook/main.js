const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
    "storybook-css-modules-preset",
    "@storybook/manager-webpack5",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: [
              "postcss-import",
              [
                "postcss-preset-env",
                {
                  "stage": 3,
                  "features": {
                    "nesting-rules": true
                  }
                }
              ]
            ]
          }
        }
      }
    }
  ],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    )
    fileLoaderRule.exclude = /\.svg$/
    return ({
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          new TsconfigPathsPlugin()
        ],
        alias: {
          ...config.resolve.alias,
          "@api/": path.resolve(__dirname, "../api/*"),
          "@components/": path.resolve(__dirname, "../components/*"),
          "@constants/": path.resolve(__dirname, "../constants/*"),
          "@generated/": path.resolve(__dirname, "../generated/*"),
          "@pages/": path.resolve(__dirname, "../pages/*"),
          "@i18n/": path.resolve(__dirname, "../i18n/*"),
          "@icons/": path.resolve(__dirname, "../icons/*"),
          "@lib/": path.resolve(__dirname, "../lib/*"),
          "@misc/": path.resolve(__dirname, "../misc/*"),
          "@theme/": path.resolve(__dirname, "../theme/*"),
        }
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.svg$/,
            enforce: "pre",
            use: [
              {
                loader: require.resolve('@svgr/webpack'),
                options: {
                  svgoConfig: {
                    plugins: {
                      removeViewBox: false
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    })
  }
}
