import { app } from 'electron';
import { mainWindow } from './pages/main';
import { httpLikeListen } from './icp/controllers';
import { electronLogger } from '../global/logger';

app.on("window-all-closed", () => {
  electronLogger.info('end electron');
  app.quit();
});

app.on("ready", () => {
  electronLogger.info('start electron');
  httpLikeListen();
  mainWindow();
});