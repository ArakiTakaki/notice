import { BrowserWindow } from 'electron';
import { preloadFile, htmlFile } from '../constants';
import { isDev } from '../../../constants';

export const mainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    x: 0,
    y: 15,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: preloadFile,
    }
  });

  if (isDev) { // DEV環境
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {     // PRD環境
    mainWindow.loadFile(htmlFile);
  }
  // mainWindow.setMenu(null);
  return mainWindow;
}