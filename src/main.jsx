import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentsProvider } from './contexts/LoadContents';
import Index from './routes/index';

import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentsProvider>
      <Index />
    </ContentsProvider>
  </React.StrictMode>,
);
