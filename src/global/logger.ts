import pino from 'pino';
import { isBrowser } from './constants';
const logger = pino({
  prettyPrint: {
    colorize: true,
    timestampKey: 'time',
    translateTime: true,
  },
  browser: {
    asObject: isBrowser,
  }
});
const createProcess = (process: string) => ({ process })
const createTag = (tag: string) => ({ tag })

export const electronLogger = logger.child(createProcess('electron'));
export const preloadLogger = logger.child(createProcess('preload'));
export const rendererLogger = logger.child(createProcess('renderer'));
export const createWebpackLogger = (tag: string) => logger.child(createProcess('webpack')).child(createTag(tag));
export const createWebpackDevServerLogger = (tag: string) => logger.child(createProcess('webpack-dev-server')).child(createTag(tag));

export default logger;
