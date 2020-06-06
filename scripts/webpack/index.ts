import command from './util/commands';
import { webpackRender } from './config/renderer';
import { webpackBrowser } from './config/main';
import { devServerProcess } from './process/devServerProsses';
import { buildProcess } from './process/buildProcess';
import { exec } from 'child_process';
import { webpackPreload } from './config/preload';
import logger from '../../src/global/logger';
const isDevelopment: boolean = command.development;
const browser = webpackRender(isDevelopment);
const main = webpackBrowser(isDevelopment);
const preload = webpackPreload(isDevelopment);

const log = (error: Error | null, stdout: string, stderr: string) => {
  console.log(stdout);
  console.error(stderr);
  error && console.error(error);
  process.exit();
};

const devTask = async () => {
  Promise.all([
    devServerProcess(),
    buildProcess(main, false),
    buildProcess(preload, false),
  ]).then(() => {
    // todo spawn で書き換え
    exec('yarn electron src/electron/index.js', log);
  }).catch(() => {
    logger.fatal('dev_server_process build fail')
  })
}

const buildTask = async () => {
  await Promise.all([
    buildProcess(main),
    buildProcess(browser),
    buildProcess(preload),
  ]);

  exec('yarn release:win', log);
  exec('yarn release:mac', log);
  exec('yarn release:linux', log);
}

const mainProcess = () => {
  if (isDevelopment) {
    devTask();
  } else {
    buildTask();
  }
}
mainProcess();