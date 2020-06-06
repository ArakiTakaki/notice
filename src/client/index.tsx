import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GlobalStyles } from './utils/GlobalStyles';
import { List } from './components/List';
import { Toast } from './components/Toast';

window.api.TokenGetByName({ tokenName: 'hogehoge' })
  .then((res) => {
    console.log(res.token);
  });
const Main: React.SFC = () => {
  return (
    <>
      <GlobalStyles />
      <h1>hoge</h1>
      <List verticalMargin={10} horizontalMargin={100}>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
      </List>
      <h1>hoge</h1>
      <List verticalMargin={10} horizontalMargin={100}>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
      </List>
      <List verticalMargin={10} horizontalMargin={100}>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
        <h1>hogeaaahoge</h1>
      </List>
      <Toast />
    </>
  )
};

ReactDOM.render(<Main />, document.getElementById('app'));

