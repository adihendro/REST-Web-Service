const express = require('express')
const router = express.Router();
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
  // res.render("index")
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ` + port);
});

// // Main Route
// router.get('/', function(req,res){
//     // res.render("index");
//     res.send('Hello World')
// });



const DATABASE_URL = 'postgres://tpkastkkjlgyni:a433516bb6d8785e4c77aa6f0c61b9e6f596e6f69fb21f03124411ae067fd8f1@ec2-52-203-182-92.compute-1.amazonaws.com:5432/d71f3sln708rq0';

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgres://tpkastkkjlgyni:a433516bb6d8785e4c77aa6f0c61b9e6f596e6f69fb21f03124411ae067fd8f1@ec2-52-203-182-92.compute-1.amazonaws.com:5432/d71f3sln708rq0',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM favourites');
    const results = { 'results': (result) ? result.rows : null};
    res.send(results);
    // res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})
