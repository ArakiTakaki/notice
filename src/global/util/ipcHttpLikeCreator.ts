import { ipcRenderer, ipcMain } from 'electron';

/**
 * HTTPみたいな形式
 * axios的な実装
 */
const ipcFetcher = <IRequest, IResponse>(endpoint: string, props: IRequest): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject();
    }, 1000);
    ipcRenderer.once(endpoint, (_, args: IResponse) => {
      clearTimeout(timeoutId);
      resolve(args);
    });
    ipcRenderer.send(endpoint, props);
  });
};

const ipcReceiver = <Request, Response>(endpoint: string, cb: (args: Request) => Response) => {
  ipcMain.on(endpoint, (event, args: Request) => {
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