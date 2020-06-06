import { Menu } from 'electron';
// ref https://www.kabanoki.net/1208/

export const setMenu = () => {
  const menu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(menu)
}
