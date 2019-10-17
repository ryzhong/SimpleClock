module.exports = {
    entry: './client/src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
  };
