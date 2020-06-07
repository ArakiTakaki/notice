import { contextBridge } from 'electron';
import { httpLikeIPC } from '../global/endpoints';
import { preloadLogger } from '../global/logger';
process.env.ELECTRON_PROCESS = 'preload';
preloadLogger.info('load to preload');

export const injectionAPI = {
  TokenGetByName: httpLikeIPC.TokenGetByName.fetch,
  TokenGetByName2: httpLikeIPC.TokenGetByName.fetch,
} as const;

const injectionObject = {
  api: injectionAPI
};

contextBridge.exposeInMainWorld('api', injectionObject.api);
preloadLogger.info('end to preload');
