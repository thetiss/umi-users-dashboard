export default {
    '/save': {
        'target': 'http://public-api-v1.aspirantzhang.com/',
        'changeOrigin': true,
        'pathRewrite': { '^/save' : '' }
    },
    '/use': {
        'target': 'http://adminv2.happymmall.com',
        'changeOrigin': true,
        'pathRewrite': { '^/use' : '' }
    }    
}