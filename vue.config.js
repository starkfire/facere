module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/facere/' : '/',
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    }
}