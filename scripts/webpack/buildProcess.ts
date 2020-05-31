import webpack from 'webpack';
import { webpackAsync } from './util/polyfill';
import { webpackBrowser } from './main';
import { webpackRender } from './renderer';
import { logger, LOG_LEVEL } from '../../utils/logger/logger';

const configList = [
  {
    config: webpackRender,
    isDevelopmentBuild: false,
  },
  {
    config: webpackBrowser,
    isDevelopmentBuild: true,
  },

];

const exec = async (config: webpack.Configuration, isDevelopment: boolean = false) => {
  logger(LOG_LEVEL.TRACE, 'webpack_build', config.name || '', 'start');
  const status = await webpackAsync(config, isDevelopment).catch((error) => {
    logger(LOG_LEVEL.FATAL, 'webpack_build', config.name || '', 'fatal');
    throw error;
  });
  logger(LOG_LEVEL.TRACE, 'webpack_build', config.name || '', 'stop');
  logger(LOG_LEVEL.INFO, 'webpack_build', config.name || '', 'done');
  return status;
}

export const buildProcess = async (isDevelopment: boolean) => {
  configList.forEach(({config, isDevelopmentBuild}) => {
    if (isDevelopment && !isDevelopmentBuild ) return;
    exec(config, isDevelopment).then((res) => {
      const buildTime = (res.status.endTime || 0) - (res.status.startTime || 0);
      logger(LOG_LEVEL.INFO, 'webapck_builded', config.name || '', `${(buildTime / 1000)}s`, true);
    });
  });
};