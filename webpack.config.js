const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "D3 React Virus"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ] 
      }
    ],
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true
  }
}
