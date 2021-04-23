import {ApolloClient, ApolloLink, HttpLink, InMemoryCache, split} from '@apollo/client';
import {getMainDefinition} from "@apollo/client/utilities";


const createClient = () => {
  let link: ApolloLink;

  link = new HttpLink({
    uri: 'http://localhost:5000/v1/graphql',
  })

  if (process.browser) {
    const {WebSocketLink} = require('@apollo/client/link/ws');

    const wsLink = new WebSocketLink({
      uri: `ws://localhost:5000/v1/graphql`,
      options: {
        reconnect: true
      }
    });

    link = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      link,
    );

    console.log('@@ split', link);
  }

  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
}

export const client = createClient();