import webpack from 'webpack';
import { PATH } from '../../constants/dirPath';
const path = require('path');

/**
 * electron自体のBuildタスク
 */
export const webpackBrowser: webpack.Configuration = {
  name: 'main',
  mode: 'development',
  entry: {
    main: PATH.TYPESCRIPTS.ELECTRON,
  },
  target: 'electron-main',
  output: {
    path: PATH.WEBPACK.OUTPUT_PATH,
    filename: '[name].js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
};
