const { buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const app = express();
app.use(cors());

const schema = buildSchema(`
  type Query {
    name: String
    count: Int
  }
`);

const rootValue = {
  name() {
    return "yulinxi";
  },
  count() {
    return 1;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.listen(8899, () => {
  console.log("Graphql Server is running at http://localhost:8899");
});
