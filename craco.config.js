const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add the `emailjs-com` module to the module resolution path
      webpackConfig.resolve.modules.push(path.resolve(__dirname, 'node_modules'));

      return webpackConfig;
    },
  },
};