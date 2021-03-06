const webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: [

    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/js/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
      jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": 'jquery',
      "jQuery": 'jquery'
    })
  ],
  output: {
    path:__dirname,
    filename:"./public/bundle.js"
  },
  resolve: {

    alias: {
      //Greeter: path.resolve(__dirname, 'public/components/Greeter.jsx'),
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      applicationStyles: path.resolve(__dirname,'app/styles/app.css')

    },
    extensions: ["*",'.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015'],
          plugins:  ["transform-object-rest-spread"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
