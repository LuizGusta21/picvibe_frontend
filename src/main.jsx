import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//Redux
import { Provider } from 'react-redux';
import { store } from './Store.js';

import '../src/main.sass';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
