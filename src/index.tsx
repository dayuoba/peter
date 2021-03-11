import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import { Store } from './Store';

// const myNotification = new Notification('Title', {
//   body: 'Notification from the Renderer process',
// });
//
// myNotification.onclick = () => {
//   // eslint-disable-next-line no-console
//   console.log('Notification clicked');
// };
//
// // eslint-disable-next-line no-console
// console.log(
//   '👋 This message is being logged by "renderer.js", included via webpack'
// );

render(<App />, document.getElementById('root'));
