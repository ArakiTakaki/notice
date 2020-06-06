import { injectionAPI } from "..";

interface MyWindow extends Window {
  api: typeof injectionAPI;
}

declare var window: MyWindow;
export default window;