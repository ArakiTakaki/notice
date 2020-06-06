import { httpLikeIPC } from "../../../global/endpoints";

export const httpLikeListen = () => {
  httpLikeIPC.TokenGetByName.listener((request) => {
    console.log('request', request);
    return {
      token: 'hogehoge' + request.tokenName,
    };
  });
};