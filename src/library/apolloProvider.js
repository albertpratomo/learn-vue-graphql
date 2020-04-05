import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const getHeaders = () => {
    const headers = {};

    const token = window.localStorage.getItem('apollo-token');

    if (token) {
        headers.authorization = `Bearer ${token}`;
    }

    return headers;
};

const link = new HttpLink({
    uri: 'https://hasura.io/learn/graphql',
    fetch,
    headers: getHeaders()
});

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({
        addTypename: true
    })
});

export default new VueApollo({
    defaultClient: client,
})
