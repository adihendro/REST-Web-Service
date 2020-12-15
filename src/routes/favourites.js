//requiring modules
const express = require('express');
const router = express.Router();
const cors = require('cors');
const pool = require('./db');

router.use(express.json());
router.use(cors());

//Get all favourites
router.get('/', async (req, res) => {
  try {
    // const client = await pool.connect();
    const resultFav = await pool.query('SELECT * FROM favourites');
    // const results = { 'rabc': (result) ? result.rows : null};
    res.json(resultFav.rows);
    // res.render('pages/db', results );
    // client.release();
  } catch (err) {
    console.error(err.message);
  }
})

//Get specific favourites
router.get('/:id', async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const resultFav = await pool.query('SELECT * FROM favourites WHERE id = $1', [id]);
    res.json(resultFav.rows);
  } catch (err) {
    console.error(err.message);
  }
})


//Post favourites
router.post('/', async (req, res) => {
  try {
    const id = req.body.id;
    const username = req.body.username;
    const games = req.body.games;

      const insertFav = await pool.query('INSERT INTO favourites VALUES ($1,$2,$3)',
      [id, username, games]);
      res.json(insertFav.rows);
  } catch (err) {
      console.error(err.message);
  }
})


//Update specific favourites
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const { games } = req.body;
    const updateFav = await pool.query('UPDATE favourites SET games = $1 WHERE id = $2',
      [games, id]);
    res.json("Favourites updated");
  } catch (err) {
    console.error(err.message);
  }
})

//Delete specific favourites
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    // const { games } = req.body;
    const deleteFav = await pool.query('DELETE FROM favourites WHERE id = $1',
      [id]);
    res.json("Favourites deleted");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
