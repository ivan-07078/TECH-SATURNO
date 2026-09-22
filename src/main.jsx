import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import './styles/global.css';

registerSW({
  immediate: true,
  onOfflineReady() {
    console.info('PWA pronta para uso offline.');
  },
  onNeedRefresh() {
    if (window.confirm('Existe uma atualização disponível para o Tech Saturno. Deseja recarregar?')) {
      window.location.reload();
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
