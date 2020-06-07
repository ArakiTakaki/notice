import { ipcRenderer, ipcMain, IpcMainEvent, IpcRendererEvent } from 'electron';
import { isPreload } from '../constants';

const ipc = isPreload ? ipcRenderer : ipcMain

/**
 * HTTPみたいな形式
 * axios的な実装
 */
const ipcFetcher = <IRequest, IResponse>(endpoint: string, props: IRequest): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject();
    }, 1000);
    ipc.once(endpoint, (_: IpcMainEvent | IpcRendererEvent, args: IResponse) => {
      clearTimeout(timeoutId);
      resolve(args);
    });
    ipcRenderer.send(endpoint, props);
  });
};

const ipcReceiver = <Request, Response>(endpoint: string, cb: (args: Request) => Response) => {
  ipc.on(endpoint, (event: IpcMainEvent | IpcRendererEvent, args: Request) => {
    event.sender.send(endpoint, cb(args));
  });
};

export const createEndpoint = <Request, Response>(endpoint: string) => ({
  listener: (cb: (args: Request) => Response) => {
    return ipcReceiver<Request, Response>(endpoint, cb);
  },
  fetch: (props: Request) => {
    return ipcFetcher<Request, Response>(endpoint, props);
  },
}) as const;