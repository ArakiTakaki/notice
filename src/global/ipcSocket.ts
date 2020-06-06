import { createCommand } from './makeListener';
type ITokenName = 'github' | 'anime';

export const ipcCommands = {
  token: createCommand<{ tokenName: ITokenName, token: string }>('token'),
}