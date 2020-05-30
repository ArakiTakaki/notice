import path from 'path';

const BASE = path.resolve();
export const PATH = {
  WEBPACK: {
    OUTPUT_PATH: path.resolve(BASE, 'dist'),
  },
  LOG: {
    OUTPUT_PATH: path.resolve(BASE, 'log'),
  },
  TYPESCRIPTS: {
    ELECTRON: path.resolve(BASE, 'src', 'electron', 'index.ts'),
    BROWSER: path.resolve(BASE, 'src', 'client','index.tsx'),
  },
  HTML: {
    BROWSER: path.resolve(BASE, 'src', 'client','index.html'),
  }
}
