const path = require('path');

// Burası webstrom da alias ları tanımlamak için yapıldı bi amacı yok bşka
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@hocs': path.resolve(__dirname, './src/hocs'),
      '@router': path.resolve(__dirname, './src/router'),
      '@state': path.resolve(__dirname, './src/state'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@views': path.resolve(__dirname, './src/views'),
      '@services': path.resolve(__dirname, './src/services'),
      '@icons': path.resolve(__dirname, './src/assets/svg'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@navigators': path.resolve(__dirname, './src/navigators'),
    },
  },
};
