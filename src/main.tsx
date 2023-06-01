import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentsProvider } from './contexts/LoadContents';
import Index from './routes/index';

import './styles/styles.css';
import { SearchProvider } from './contexts/Search';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ContentsProvider>
      <SearchProvider>
        <Index />
      </SearchProvider>
    </ContentsProvider>
  </React.StrictMode>,
);
