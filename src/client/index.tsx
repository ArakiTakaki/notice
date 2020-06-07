import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GlobalStyles } from './utils/GlobalStyles';
import { List } from './components/List';
import { Toast } from './components/Toast';
import { Button } from './components/Button';
import { rendererLogger, createLoggerTag } from '../global/logger';

const mainLog = rendererLogger.child(createLoggerTag('main component'));
window.api.TokenGetByName({ tokenName: 'hogehoge' })
  .then((res) => {
    console.log(res.token);
  });
const Main: React.SFC = () => {
  mainLog.info('exec <mai></mai>n');
  return (
    <>
      <GlobalStyles />
      <h1>hoge</h1>
      <div style={{padding: 20}}>
        <List verticalMargin={10} horizontalMargin={100}>
          <div style={{padding: 40}}>
            <h1>hoge aaa hoge</h1>
          </div>
          <div style={{padding: 40}}>
            <h1>hoge aaa hoge</h1>
          </div>
          <div style={{padding: 40}}>
            <h1>hoge aaa hoge</h1>
          </div>
        </List>
      </div>
      <h1>hoge</h1>
      <div style={{margin: 100, width: 200}}>
        <Button>I AGREE</Button>
      </div>
      <div style={{margin: 100, width: 200}}>
        <Button>同意しない</Button>
      </div>
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

