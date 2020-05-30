import React from 'react';
import ReactDOM from 'react-dom';

const Hello: React.SFC = () => {
  return (
    <div>
      <h1>hogehoge</h1>
    </div>
  )
};

ReactDOM.render(<Hello />, document.getElementById('app'));

