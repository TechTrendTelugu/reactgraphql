import React from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import UserListQuery from './components/UserListQuery'

function createApolloClient () {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
      
    }),
    cache: new InMemoryCache(),
  });
 };


function App() {
  
  const client = createApolloClient();
  return (
   
    <ApolloProvider client={client}>
       <div><UserListQuery/>
       </div>
    </ApolloProvider>
  );
}

export default App;
