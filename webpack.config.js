var config = {
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 9090
    },


    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          },
          {
            test: /\.less$/,
            loader: 'style!css!less'
          },
          {
            test: /\.css$/, // Only .css files
            loader: 'css-loader'
          }
       ]
    }
 }
 module.exports = config;