import * as webpack from 'webpack';
import { webpackAsync } from '../util/polyfill';
import logger from '../../../src/global/logger';

export const buildProcess = async (config: webpack.Configuration, isWatch: boolean = false) => {
  const child = logger.child({webpackName: config.name});
  child.info('start');
  const status = await webpackAsync(config, isWatch).catch((error) => {
    child.fatal('build fail')
    throw error;
  });
  const time = (status.status.endTime || 0) - (status.status.startTime || 0);
  child.info('end');
  child.info(`${time / 1000}s`)
  return status;
}