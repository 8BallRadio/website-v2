const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Prior webpack config with necessary module

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//   entry: path.join(__dirname, 'src', 'main.js'),
//   output: {
//     path: path.resolve(__dirname, 'dist')
//   },
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.(jpg|png|svg)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[path][name].[hash].[ext]'
//         }
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, 'public', 'index.html')
//     }),
//     new Dotenv({
//       systemvars: true
//     })
//   ]
// }

const browserConfig = {
  mode: 'production',
  entry: './src/browser/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['css-loader'] },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
}

const serverConfig = {
  mode: 'production',
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
}

module.exports = [browserConfig, serverConfig]
