import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatbotSettings, Header, MessageDisplay, ResponseDock, UserSettings} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <div className="grid-container">
          <Header/>
          <UserSettings/>
          <ChatbotSettings/>
          <ResponseDock/>
          <MessageDisplay/>
        </div>
    </div>
  );
}

export default App;
