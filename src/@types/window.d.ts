import { injectionAPI } from "../preload";

interface MyWindow extends Window {
  api: typeof injectionAPI;
}

declare global {
  interface Window {
    window: MyWindow;
  }
}

declare var window: MyWindow;
