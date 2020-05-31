import { webpackRender } from './renderer';
import { startDevServer } from './util/polyfill';

export const devServerProcess = async () => {
  await startDevServer(webpackRender(true));
};
