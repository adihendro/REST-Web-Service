
// Connect to Postgres Heroku
const DATABASE_URL = 'postgres://tpkastkkjlgyni:a433516bb6d8785e4c77aa6f0c61b9e6f596e6f69fb21f03124411ae067fd8f1@ec2-52-203-182-92.compute-1.amazonaws.com:5432/d71f3sln708rq0';

const Pool = require('pg').Pool;
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;