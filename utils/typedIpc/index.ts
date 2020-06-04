export interface Command<T> {
  command: string;
  data: T;
}

export const createCommand = <T>(command: string) => ({
  generate: (data: T) => <Command<T>>{
    command: command,
    data: data
  },
  parse: (data: Command<any>, callback?: (data: T) => void) => {
    if (data.command == command) {
      if (callback) {
        callback(data.data);
      }
      return data.data as T;
    }
    return null;
  },
  type: {} as T,
  command: command
});

export const CmdToServer = {
  // ping
  NOW_PING: createCommand<{ value: boolean }>("now_ping"),
}