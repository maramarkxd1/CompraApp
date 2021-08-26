module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: '@import "~@/scss/_variables.scss";'
        }
      }
    }
    // devServer: {
    //   proxy: 'https://immense-oasis-80832.herokuapp.com'
    // }
  }