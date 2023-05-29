import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentsProvider } from './contexts/LoadContents';

import './styles/styles.css';
import './styles/responsive.css';
import Index from './routes/Index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentsProvider>
      <Index />
    </ContentsProvider>
  </React.StrictMode>,
);
