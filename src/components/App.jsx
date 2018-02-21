import React from 'react';
import Header from './Header';
import DropDownSelect from './DropDownSelect';

const App = () => {
  return (
    <div>
      <Header>
        <div id="Header">
          <h2>Reusable React Components</h2>
        </div>
      </Header>
      <DropDownSelect />
    </div>
  );
}

export default App;
