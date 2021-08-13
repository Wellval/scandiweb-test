import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache: cache,
    uri: 'http://localhost:4000/graphql',
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});