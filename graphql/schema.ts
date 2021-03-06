import { queryType, makeSchema } from "nexus";
import path from "path";
const Query = queryType({
  definition(t) {
    t.string("hello", { resolve: () => "hello world" });
  },
});
export const schema = makeSchema({
  types: [Query],
  outputs: {
    typegen: path.join(process.cwd(), "generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated", "schema.graphql"),
  },
});
