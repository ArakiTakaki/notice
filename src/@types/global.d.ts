import { injectionAPI } from "../preload";
import logger from "../global/logger";

interface MyWindow extends Window {
  api: typeof injectionAPI;
  logger: typeof logger;
}

declare global {
  interface Window {
    api: typeof injectionAPI;
    logger: typeof logger;
  }
}
declare var window: MyWindow;
