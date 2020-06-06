import { createEndpoint } from "./ipcHttpLike";

export const httpLikeIPC = {
  TokenGetByName: createEndpoint<{tokenName: string}, {token: string}>('/token/get'),
};
