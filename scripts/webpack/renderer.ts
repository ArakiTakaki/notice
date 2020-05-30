import webpack from 'webpack';
import { PATH } from '../../constants/dirPath';
const HtmlPlugin = require('html-webpack-plugin');

/**
 * RendererProcessのタスク
 */
export const webpackRender: webpack.Configuration = {
  name: 'renderer',
  mode: 'development',
  entry: {
    renderer: PATH.TYPESCRIPTS.BROWSER,
  },
  target: 'electron-renderer',
  output: {
    path: PATH.WEBPACK.OUTPUT_PATH,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          { loader: 'ts-loader', }
        ],
      },
      {
        test: /\.(fpc|mps|mpb|cxc|cxs|cxb|tga|glsl|vs|fs|jpg|png|gif|obj|mtl)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
            }
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new HtmlPlugin({template: PATH.HTML.BROWSER, inject: true})
  ],
};