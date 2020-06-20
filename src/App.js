import React from 'react';
import './App.css';
import Message from './message.js';

function App() {
  return (
    <div className="App">
      <Message surge= "http://bootcampversion1.surge.sh/" github="https://github.com/NamrahSiddiqua/bootcamp2020-version.1"/>
      <hr/>
      <Message surge= "http://bootcamp202-version2.surge.sh/" github="https://github.com/NamrahSiddiqua/bootcamp2020-react-app"/>
      <hr/>
      <Message surge= "http://bootcampversion1.surge.sh/" github="https://github.com/NamrahSiddiqua/bootcamp2020-version.1"/>
    </div>
  );
}

export default App;
