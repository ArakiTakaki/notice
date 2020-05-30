import webpack from 'webpack';
import { webpackAsync } from './util/polyfill';
import { webpackBrowser } from './main';
import { webpackRender } from './renderer';
import { logger, LOG_LEVEL } from '../../utils/logger/logger';

interface IConfigItem {
  name: string;
  config: webpack.Configuration;
}
const configList: IConfigItem[] = [
  {
    name: 'electron build',
    config: webpackRender,
  },
  {
    name: 'browser build',
    config: webpackBrowser,
  }
];

const exec = async (config: IConfigItem) => {
  logger(LOG_LEVEL.TRACE, 'webpack_build', config.name, 'start');
  await webpackAsync(config.config).catch((error) => {
    logger(LOG_LEVEL.FATAL, 'webpack_build', config.name, 'fatal');
    throw error;
  });
  logger(LOG_LEVEL.TRACE, 'webpack_build', config.name, 'stop');
  logger(LOG_LEVEL.INFO, 'webpack_build', config.name, 'done');
}

const main = async () => {
  configList.forEach((value) => {
    exec(value);
  });
};

main()


