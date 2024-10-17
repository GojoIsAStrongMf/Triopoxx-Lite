const express = require('express');
const res = require('express/lib/response');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const targeturl  = 'https://www.google.com/';

const proxy = createProxyMiddleware({
target: targeturl,
changeOrigion: true,
secure: true,
loglevel: 'debug',
pathRewrite: {'^/api': ''},
onProxyReq: (ProxyReq, req, res) => {
  proxyReq.setHeader('X-Special-Proxy-Header', 'TrioProxx');
},
onError: (err, req, res) => {
console.error('proxy error', err);
res.status(500).send('something went wrong with the proxy');
},
});

app.use('/api', proxy);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
