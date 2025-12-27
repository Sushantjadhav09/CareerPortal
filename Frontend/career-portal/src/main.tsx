import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  Store  from '../Store';
import './index.css';
import App from './App';
// import { Store } from './src'; // 👈 adjust path if needed

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);
