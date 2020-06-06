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
contextBridge.exposeInMainWorld('logger', {
  logger: (hoge: string) => console.log(hoge),
});


process.once('loaded', () => {
  console.log('---- preload.js loaded ----');
  window.process = process;
  global.process = process;
});