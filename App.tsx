import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import AppContainer from './src'
import { AsyncStorage } from 'react-native';

AsyncStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTA3YzA5YmFmZTg3NjM4NTBhZDdlNjgiLCJpYXQiOjE1Nzc5NzA0Njl9.4VSjrRIDoloxFS5nC6WEydjkxU9m-n6M9E7aBMRXLds")
const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})
const authLink = setContext(async (_, { headers }) => {
  const token: string = await AsyncStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
})

const link = authLink.concat(httpLink)
const client = new ApolloClient({
  cache,
  link
})

export default () => (
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>
)
