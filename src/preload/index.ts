import { contextBridge } from 'electron';
import { httpLikeIPC } from '../global/endpoints';

export const injectionAPI = {
  TokenGetByName: httpLikeIPC.TokenGetByName.fetch,
  TokenGetByName2: httpLikeIPC.TokenGetByName.fetch,
} as const;
const injectionObject = {
  api: injectionAPI
};
contextBridge.exposeInMainWorld('api', injectionObject.api);
