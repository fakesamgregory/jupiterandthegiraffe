// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    server: './server.ts',
  },
  target: 'node',
<<<<<<< HEAD
  resolve: {extensions: ['.ts', '.js']},
  externals: [/(node_modules|main\..*\.js)/, function(context, request, callback) {
    // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
    if(/firebase\/(app|firestore)/.test(request)) {
      return callback(null, 'commonjs ' + request);
    }
    callback();
  }],
=======
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      ['firebase/app']: path.resolve(__dirname, 'node_modules/firebase/app/dist/index.cjs.js')
    }
  },
  externals: [/(node_modules|main\..*\.js)/,],
>>>>>>> 5e65fa34e04c6d829dfd0fa7d29d0e952929769d
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
}
