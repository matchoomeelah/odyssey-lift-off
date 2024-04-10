import React from 'react';
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000', // Location of server
  cache: new InMemoryCache() // Allows caching of data from previous queries
});

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
