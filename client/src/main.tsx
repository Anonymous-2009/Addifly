import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './pages/Error';
import { Toaster } from 'react-hot-toast';
import { customToastOptions } from './utils/theme';
import { Provider } from 'react-redux';
import { store } from './app/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster toastOptions={customToastOptions} />
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
