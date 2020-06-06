import * as webpack from 'webpack';
import { webpackAsync } from '../util/polyfill';
import logger from '../../../src/global/logger';

export const buildProcess = async (config: webpack.Configuration, isWatch: boolean = false) => {
  logger.info('webpack_build start');
  const status = await webpackAsync(config, isWatch).catch((error) => {
    logger.fatal('webpack_build fatal');
    throw error;
  });
  const time = (status.status.endTime || 0) - (status.status.startTime || 0);
  logger.info('webpack_build end')
  logger.info(`webpack_build time ${time / 1000}s`)
  return status;
}