import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4oqvoi60t2m01z43wof5xy3/master",
    cache: new InMemoryCache(),
});
