import { injectionAPI } from "../preload";

interface MyWindow extends Window {
  api: typeof injectionAPI;
}

declare global {
  interface Window {
    api: typeof injectionAPI;
  }
}
declare var window: MyWindow;
