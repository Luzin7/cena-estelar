import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentsProvider } from './contexts/LoadContents';
import { SearchProvider } from './contexts/Search';
import { UserDataProvider } from './contexts/userData';
import Index from './routes/index';
import './styles/index.css';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ContentsProvider>
      <SearchProvider>
        <UserDataProvider>
          <Index />
        </UserDataProvider>
      </SearchProvider>
    </ContentsProvider>
  </React.StrictMode>,
);
