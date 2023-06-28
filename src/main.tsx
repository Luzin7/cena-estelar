import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentsProvider } from './hooks/contexts/LoadContents';
import { SearchProvider } from './hooks/contexts/Search';
import Index from './routes/index';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ContentsProvider>
      <SearchProvider>
        <Index />
      </SearchProvider>
    </ContentsProvider>
  </React.StrictMode>,
);
