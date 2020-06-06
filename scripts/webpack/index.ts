import command from './util/commands';
import { webpackRender } from './config/renderer';
import { webpackBrowser } from './config/main';
import { devServerProcess } from './process/devServerProsses';
import { buildProcess } from './process/buildProcess';
import { logger, LOG_LEVEL } from '../../utils/logger/logger';
import { exec } from 'child_process';
import { webpackPreload } from './config/preload';
const isDevelopment: boolean = command.development;
const browser = webpackRender(isDevelopment);
const main = webpackBrowser(isDevelopment);
const preload = webpackPreload(isDevelopment);

const devTask = async () => {
  Promise.all([
    devServerProcess(),
    buildProcess(main, false),
    buildProcess(preload, false),
  ]).then(() => {
    exec('yarn electron src/electron/index.js');
  }).catch(() => {
    logger(LOG_LEVEL.FATAL, 'DEV_SERVER_PROCESS', 'index.ts', 'fail to build')
  })
}

const buildTask = () => {
  buildProcess(main);
  buildProcess(browser);
  buildProcess(preload, false);
}

const mainProcess = () => {
  if (isDevelopment) {
    devTask();
  } else {
    buildTask();
  }
}
mainProcess();