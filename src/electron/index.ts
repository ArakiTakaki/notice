import {app, BrowserWindow} from 'electron';
import path from 'path';

// window.gcをonにする
app.commandLine.appendSwitch('js-flags', '--expose-gc');

// 画面の拡大縮小制御
// webFrame.setZoomLevelLimets(1, 1);
app.on("window-all-closed", () => {
  if(process.platform !== "darwin"){
    app.quit();
  }
});

app.on("ready", () => {
  // kiosk
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    x: 0,
    y: 0,
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

  mainWindow.loadFile(path.resolve('dist', 'index.html'));
  mainWindow.setMenu(null);
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed",function(){
  	app.quit();
  });
});