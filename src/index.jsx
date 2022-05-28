import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

async function main() {
  if (process.env.NODE_ENV === 'development') {
    if (window.location.pathname === '/react-shopping-cart') {
      window.location.pathname = '/react-shopping-cart/';
      return;
    }
    const { worker } = require('./mocks/worker');

    await worker.start({
      serviceWorker: {
        url: `/react-shopping-cart/mockServiceWorker.js`,
      },
    });
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

main();
