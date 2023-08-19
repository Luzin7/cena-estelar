import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentsProvider } from './contexts/LoadContents';
import { SearchProvider } from './contexts/Search';
import { UserDataProvider } from './contexts/userData';
import Index from './routes/index';
import './styles/index.css';
import './styles/styles.css';
import { ViewPortProvider } from './contexts/ViewPort';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ContentsProvider>
      <SearchProvider>
        <UserDataProvider>
          <ViewPortProvider>
            <Index />
          </ViewPortProvider>
        </UserDataProvider>
      </SearchProvider>
    </ContentsProvider>
  </React.StrictMode>,
);
