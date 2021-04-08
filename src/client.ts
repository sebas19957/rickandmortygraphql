import { HttpLink } from 'apollo-link-http';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
// import { InMemoryCache } from 'apollo-cache-inmemory';



const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;
