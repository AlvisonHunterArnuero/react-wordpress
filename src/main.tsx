import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DataProvider } from './DataProviderContext';
import * as Sentry from '@sentry/react';

import './index.css';
import App from './App.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <Sentry.ErrorBoundary fallback={<>An error has occurred</>}>
        <App />
      </Sentry.ErrorBoundary>
    </DataProvider>
  </StrictMode>
);
