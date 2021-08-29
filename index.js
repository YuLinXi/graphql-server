const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Title",
    author: "Author",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.start().then(() => {
  const app = express();

  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send("Hello!");
    res.end();
  });

  app.listen({ port: 8899 }, () => {
    console.log(
      `Server ready at http://localhost:8899${apolloServer.graphqlPath}`
    );
  });
});
