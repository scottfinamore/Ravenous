// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.yelp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v3', // rewrite path
      },
    })
  );
};
