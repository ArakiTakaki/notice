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
//  const pino = require('pino')({browser: {asObject: true}})
export default logger;
