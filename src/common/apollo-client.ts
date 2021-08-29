import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,

  headers: {
    'x-api-key': process.env.REACT_APP_GRAPHQL_KEY || '',
    Authorization: process.env.REACT_APP_GRAPHQL_ID || '',
  },
  cache: new InMemoryCache(),
})


export default client;