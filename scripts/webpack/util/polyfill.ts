import webpack from 'webpack';

export const webpackAsync = (config: webpack.Configuration) => {
  return new Promise((resolve, reject) => {
    const a = webpack(config, (error) => {
      if (error != null) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};