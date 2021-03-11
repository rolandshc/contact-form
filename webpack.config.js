const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
    test: /\.(jpe?g|png|gif|svg|ico)$/i,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]'
              }
      },
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    writeToDisk: true
  },
  plugins: [
   new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: 'src/images/favicon.ico'
    })
 ]
};
