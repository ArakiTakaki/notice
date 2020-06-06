import { app, BrowserWindow } from 'electron';
import { httpLikeIPC } from '../global/endpoints';
import path from 'path';

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
const isDev = process.env.NODE_ENV === 'development';

const preloadFile = path.resolve(__dirname, './preload.js');
const htmlFile = path.resolve(__dirname, './index.html');
app.on("window-all-closed", () => {
  if(process.platform !== "darwin"){
    app.quit();
  }
});
httpLikeIPC.TokenGetByName.listener((request) => {
  console.log('request', request);
  return {
    token: 'hogehoge' + request.tokenName,
  };
})
app.on("ready", () => {
  // kiosk
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: preloadFile,
    }
  });

  const screen = require("electron").screen;
  const { width, height } = screen.getPrimaryDisplay().size;
  //下記を追加する
  mainWindow.setBounds({
    width: width,
    height: height,
    x: 0,
    y: 0,
  });
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadFile(path.resolve('./dist/index.html'));
  }
  // mainWindow.setMenu(null);
  // dev 環境
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed",function(){
  	app.quit();
  });
});