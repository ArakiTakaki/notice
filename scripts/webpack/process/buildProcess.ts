import webpack from 'webpack';
import { webpackAsync } from '../util/polyfill';
import { logger, LOG_LEVEL } from '../../../utils/logger/logger';

export const buildProcess = async (config: webpack.Configuration, isWatch: boolean = false) => {
  logger(LOG_LEVEL.TRACE, 'webpack_build', config.name || '', 'start');
  const status = await webpackAsync(config, isWatch).catch((error) => {
    logger(LOG_LEVEL.FATAL, 'webpack_build', config.name || '', 'fatal');
    throw error;
  });
  logger(LOG_LEVEL.TRACE, 'webpack_build', config.name || '', 'stop');
  logger(LOG_LEVEL.INFO, 'webpack_build', config.name || '', 'done');
  return status;
}