const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      //   {
      //     test: /\.(gif|png|jpe?g|svg)$/i,
      //     use: [
      //       'file-loader',
      //       {
      //         loader: 'image-webpack-loader',
      //         options: {
      //           mozjpeg: {
      //             progressive: true,
      //           },
      //           // optipng.enabled: false will disable optipng
      //           optipng: {
      //             enabled: false,
      //           },
      //           pngquant: {
      //             quality: [0.65, 0.90],
      //             speed: 4
      //           },
      //           gifsicle: {
      //             interlaced: false,
      //           },
      //           // the webp option will enable WEBP
      //           webp: {
      //             quality: 75
      //           }
      //         }
      //       },
      //     ],
      //   }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '',
    }),
  ],
};
