const { graphql, buildSchema } = require("graphql");

const scheme = buildSchema(`
  type Query {
    name: String
    count: Int
  }
`);

const root = {
  name() {
    return "yulinxi";
  },
  count() {
    return 1;
  },
};

graphql(scheme, "{ name }", root).then((res) => {
  console.log(res);
});
