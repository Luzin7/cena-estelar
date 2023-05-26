import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import { ContentsProvider } from './contexts/LoadContents';

import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentsProvider>
      <RouterProvider
        router={router}
        fallbackElement={<h1>Carregando...</h1>}
      />
    </ContentsProvider>
  </React.StrictMode>,
);
