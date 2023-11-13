import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import './index.css';

import router from './routes/router';
import supabase from './lib/supabase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <RouterProvider router={router} />
    </SessionContextProvider>
  </React.StrictMode>
);
