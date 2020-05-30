import webpack from 'webpack';
import { PATH } from '../../constants/dirPath';

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
  module: {
    rules: [
      {
        test: /\.ts$/,
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
