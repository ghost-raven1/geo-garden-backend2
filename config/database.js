const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'ec2-34-249-49-9.eu-west-1.compute.amazonaws.com',
      port: '5432',
      database: 'da59jdjuscmb2j',
      user: 'xyyzfflpnaoekv',
      password: '61ff233dbf4807a382f4a490ca0e1329eb251e84619836b1b42dd8189ec9bb4e',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
