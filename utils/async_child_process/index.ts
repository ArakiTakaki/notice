import child_process from 'child_process';

export const exec = (command: string) => {
  child_process.exec(command);
}