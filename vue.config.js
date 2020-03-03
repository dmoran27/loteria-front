module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://secret-dusk-79628.herokuapp.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
