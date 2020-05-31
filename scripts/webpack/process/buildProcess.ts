import webpack from 'webpack';
import { webpackAsync } from '../util/polyfill';
import { logger, LOG_LEVEL } from '../../../utils/logger/logger';

export const buildProcess = async (config: webpack.Configuration, isWatch: boolean = false) => {
  logger(LOG_LEVEL.TRACE, 'webpack_build', config.name || '', 'step:start', true);
  const status = await webpackAsync(config, isWatch).catch((error) => {
    logger(LOG_LEVEL.FATAL, 'webpack_build', config.name || '', 'fatal', true);
    throw error;
  });
  const time = (status.status.endTime || 0) - (status.status.startTime || 0);
  logger(LOG_LEVEL.TRACE, 'webpack_build', config.name || '', `step:done:${time / 1000}ms`, true);
  return status;
}