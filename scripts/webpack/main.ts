import webpack from 'webpack';
import { PATH } from '../../constants/dirPath';
import { isDev } from '../../constants';


/**
 * electron自体のBuildタスク
 */
export const webpackBrowser: webpack.Configuration = {
  name: 'electron:main',
  mode: isDev ? 'development' : 'production',
  entry: {
    main: PATH.TYPESCRIPTS.ELECTRON,
  },
  devtool: isDev ? 'inline-source-map' : undefined,
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
