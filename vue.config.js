module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/_variables.scss";'
      },
      scss: {
        additionalData: '@import "@/assets/scss/_variables.scss";'
      }
    }
  }
}
