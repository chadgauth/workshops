/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: {DateTime: 'string'},
  introspection: {
    //This is the endpoint for your server
    endpoint: 'https://example1-crypto-workshop.chillicream.com/graphql',
    headers: {},
  },
  destination: './gqless/index.ts',
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
