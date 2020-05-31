import command from './util/commands';
import { webpackRender } from './renderer';
import { webpackBrowser } from './main';
import { devServerProcess } from './devServerProsses';
import { buildProcess } from './buildProcess';
import { logger, LOG_LEVEL } from '../../utils/logger/logger';
import { exec } from 'child_process';
const isDevelopment: boolean = command.development;
const browser = webpackRender(isDevelopment);
const main = webpackBrowser(isDevelopment);

const devTask = async () => {
  Promise.all([
    await devServerProcess(),
    await buildProcess(main, true),
  ]).then(() => {
    exec('yarn electron src/electron/index.js');
  }).catch(() => {
    logger(LOG_LEVEL.FATAL, 'DEV_SERVER_PROCESS', 'index.ts', 'fail to build')
  })
}

const buildTask = () => {
  buildProcess(main);
  buildProcess(browser);
}

const mainProcess = () => {
  if (isDevelopment) {
    devTask();
  } else {
    buildTask();
  }
}
mainProcess();