import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './infrastructure/config/i18next';
import Benefits from '../src/presentation/components/Benefits.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Benefits />
  </StrictMode>
);
