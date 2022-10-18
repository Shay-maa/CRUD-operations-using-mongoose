const Ajv = require("ajv").default;
const schema = {
  type: "object",
  properties: {
    fn: {
      type: "string",
    },
    ln: {
      type: "string",
    },
    dept: {
      type: "string",
      maxLength: 2,
      minLength: 2,
    },
  },
  required: ["fn", "ln"],
};

const ajv = new Ajv();
module.exports = ajv.compile(schema);
