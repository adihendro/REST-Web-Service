//requiring modules
const express = require('express')
const router = express.Router();
const app = express();

//requiring models
const dbRoutes = require('./favourites');

router.get('/', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM favourites');
      // const results = { 'rabc': (result) ? result.rows : null};
      res.send(result.rows);
      // res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

module.exports = router;