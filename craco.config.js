module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules.push({
          test: /\.md$/,
          type: "asset/resource",
        });
        return webpackConfig;
      }
    }
  };
  