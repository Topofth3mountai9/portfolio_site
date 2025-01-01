import React from 'react';
import '../src/index.css'
import ReactDOM from 'react-dom/client';
import { IconContext } from 'react-icons';
import styles from './main.module.scss';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: `${styles.svg}` }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);
