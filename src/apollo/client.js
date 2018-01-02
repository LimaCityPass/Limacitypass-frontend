import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://52.67.227.244:60000/simple/v1/cjbd988r500020156isuwhlqn' }),
    cache: new InMemoryCache()
});

export default client;
