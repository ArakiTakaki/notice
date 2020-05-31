import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

export const webpackAsync = (config: webpack.Configuration, isWatch: boolean = false): Promise<{status: webpack.Stats, webpack: webpack.Compiler.Watching | webpack.Compiler}> => {
  return new Promise((resolve, reject) => {
    const process = webpack(config, (error, status) => {
      if (error != null) {
        reject(error);
        return;
      }
      resolve({
        status: status,
        webpack: process,
      });
    });
    if (process instanceof webpack.Compiler) {
      if (isWatch) {
        process.watch({}, () => {
          console.log('watch');
        });
      }
    }
  });
};

export const startDevServer = (config: webpack.Configuration & { devServer: webpackDevServer.Configuration }) => {
  const devServer = new webpackDevServer(webpack(config));
  devServer.listen(
    config.devServer.port || 3000,
    config.devServer.host || '0.0.0.0',
    ((error) => {
      if (error != null) {
        console.log(error);
        return;
      }
      console.log('started dev server');
    }
  ));
}