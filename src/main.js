import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/Auth';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);