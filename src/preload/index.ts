import { contextBridge } from 'electron';
import { httpLikeIPC } from '../global/endpoints';

export const injectionAPI = {
  TokenGetByName: httpLikeIPC.TokenGetByName.fetch,
  TokenGetByName2: httpLikeIPC.TokenGetByName.fetch,
}
const injectionObject = {
  api: injectionAPI
} as const;
contextBridge.exposeInMainWorld('api', injectionObject);
