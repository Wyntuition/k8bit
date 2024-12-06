const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to the Kubernetes API
app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8001',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' }, 
    })
  );

// Serve static files from the current directory
app.use(express.static('.'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
