import React from 'react';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header>
        <div id="Header">
          <h2>Reusable React Components</h2>
          <p>This simple header uses the children prop, with all jsx and style rules passed from the parent.</p>
        </div>
      </Header>
    </div>
  );
}

export default App;
