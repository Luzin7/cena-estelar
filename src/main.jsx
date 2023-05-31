import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentsProvider } from './contexts/LoadContents';
// eslint-disable-next-line import/no-named-as-default
import Index from './routes/index';

import './styles/styles.css';
import { SearchProvider } from './contexts/Search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentsProvider>
      <SearchProvider>
        <Index />
      </SearchProvider>
    </ContentsProvider>
  </React.StrictMode>,
);
