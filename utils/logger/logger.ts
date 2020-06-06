import { PATH } from "../../constants/dirPath";
import { resolve } from 'path';
import * as fs from 'fs';
import { LOG_LEVEL } from "./enum";

// INFO  2015-10-30 15:44:01,836 [http-8080-4] START - /path/to/example is Called from getApplication.
export const logger = (level: LOG_LEVEL, logName: string, logTarget: string, text: string, isOutput: boolean = false) => {
  const now = new Date();
  const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const status = (() => {
    switch (level) {
      case LOG_LEVEL.FATAL:
        return 'FATAL';
      case LOG_LEVEL.ERROR:
        return 'ERROR';
      case LOG_LEVEL.WARN:
        return 'WARN';
      case LOG_LEVEL.INFO:
        return 'INFO';
      case LOG_LEVEL.DEBUG:
        return 'DEBUG';
      case LOG_LEVEL.TRACE:
        return 'TRACE';
      default:
        return 'NONE';
    }
  })();
  const data = `${status}\t${date} ${time} ${logName} ${logTarget} ${text}`;
  if (isOutput) {
    console.log(data);
    if (level !== LOG_LEVEL.DEBUG && level !== LOG_LEVEL.TRACE && level !== LOG_LEVEL.INFO) return;
    try { fs.mkdirSync(PATH.LOG.OUTPUT_PATH) } catch (err) {}
    fs.appendFileSync(resolve(PATH.LOG.OUTPUT_PATH, `${date}.log`), `${data}\n`);
  } else {
    console.log(data);
  }
  return data;
};
