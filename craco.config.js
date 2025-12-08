module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        return webpackConfig; // 不处理 .md
      }
    }
};
