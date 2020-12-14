//requiring modules
const express = require('express');
const router = express.Router();
const pool = require('./db');

// app.use(express.json());

router.get('/', async (req, res) => {
  try {
    // const client = await pool.connect();
    const result = await pool.query('SELECT * FROM favourites');
    // const results = { 'rabc': (result) ? result.rows : null};
    res.json(result.rows);
    // res.render('pages/db', results );
    // client.release();
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
