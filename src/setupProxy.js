const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  /*app.use(
    "/projects/20201221-plan-your-shot-map/data/plan-your-shot.json",
    createProxyMiddleware({
      target: "https://dataviz.nbcnews.com",
      changeOrigin: true
    })
  ); */
  app.use(
    "/v1/us/current.json",
    createProxyMiddleware({
      target: "https://api.covidtracking.com",
      changeOrigin: true
    })
  );
};