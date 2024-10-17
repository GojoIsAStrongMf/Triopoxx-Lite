const express = require('express');
const { createprooxuMiddleware } = require('http-proxy-middleware');

const app = express();

const src = 'https://google.com';

const prooxu = createprooxuMiddleware({
  target: src,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'mathsspot.com') {
      req.headers['X-Forwarded-For'] = ''; 
      req.headers['X-Real-IP'] = '';
      req.headers['Via'] = '';
    }
    return src;
  }
});

app.use('/', prooxu);

const port = process.env.PORT || 443;
app.listen(port, () => {
  console.log(`idk ${port}`);
});
