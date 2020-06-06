import { app } from 'electron';
import { mainWindow } from './pages/main';
import { httpLikeListen } from './icp/controllers';

app.on("window-all-closed", () => {
  if(process.platform !== "darwin"){
    app.quit();
  }
});

app.on("ready", () => {
  httpLikeListen();
  mainWindow();
});