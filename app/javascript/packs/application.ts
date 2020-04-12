import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { Test } from "./__generated__/Test";

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

const railsCsrfToken = document
  .querySelector("meta[name=csrf-token]")
  ?.getAttribute("content");

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/graphql",
    headers: {
      "X-CSRF-Token": railsCsrfToken,
    },
  }),
});

const GET_TEST = gql`
  query Test {
    testField
  }
`;

client
  .query<Test>({ query: GET_TEST })
  .then((result) => console.log("GraphQL result: ", result.data));
