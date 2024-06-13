module.exports = {
  devServer: {
    port: 8080,
    host: "0.0.0.0",  // Remplacer 'public' par 'host'
    allowedHosts: 'all', // Ajouté pour autoriser toutes les hôtes
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: {
    optimization: {
      minimize: false
    }
  }
};
