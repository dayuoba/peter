import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

import './App.global.css';
import Home from './pages/Home';
import { StoreProvider } from './Store';

type Message = {
  code: number;
  msg: string;
};

const ENDPOINT = 'http://localhost:3000';
export default function App() {
  useEffect(() => {
    const sock = socketIOClient(ENDPOINT);
    sock.on('server message', (msg: Message) => {
      console.log(msg);
      const noti = new Notification('系统消息', {
        body: msg.msg,
      });

      noti.onclick = () => {
        console.log('foo');
      };
    });
    return () => {
      sock.disconnect();
    };
  });

  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}
