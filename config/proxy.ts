export default {
    '/save': {
        'target': 'http://public-api-v1.aspirantzhang.com/',
        'changeOrigin': true,
        'pathRewrite': { '^/save' : '' },
      },
  }