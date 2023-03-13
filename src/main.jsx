import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { App } from './App'
import { store } from './store'
import { rickAndMortyGraphQL } from './store/apis/rickAndMortyGraphQL'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <ApolloProvider client={ rickAndMortyGraphQL }>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ApolloProvider>,
    </Provider>
  </React.StrictMode>,
)
