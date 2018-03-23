module.exports = {
    plugins: [
      require('postcss-easy-import')({prefix: '_'}), // keep this first
      require('autoprefixer')({ /* ...options */ }) // so imports are auto-prefixed too
    ]
  }

//If your stylesheets import fonts
    //https://github.com/zeit/next.js/tree/master/examples/with-global-stylesheet