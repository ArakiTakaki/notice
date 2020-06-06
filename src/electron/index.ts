import { app } from 'electron';
import { mainWindow } from './pages/main';
import { httpLikeListen } from './icp/controllers';
import logger from '../global/logger';

const electronLogger = logger.child({ process: 'electron' })
app.on("window-all-closed", () => {
  app.quit();
});

app.on("ready", () => {
  electronLogger.info('start electron');
  electronLogger.info('start electron');
  electronLogger.info('start electron');
  electronLogger.info('start electron');
  electronLogger.info('start electron');
  httpLikeListen();
  mainWindow();
});