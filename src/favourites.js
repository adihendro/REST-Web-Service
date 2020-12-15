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
    const resultFav = await pool.query('SELECT * FROM favourites');
    res.json(resultFav.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//Get specific favourites
router.get('/:gameid', async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const resultFav = await pool.query('SELECT * FROM favourites WHERE gameid = $1', [id]);
    res.json(resultFav.rows);
  } catch (err) {
    console.error(err.message);
  }
})


//Post favourites
router.post('/', async (req, res) => {
  try {
    const gameData = [req.body.name, req.body.released, req.body.rating];

    const insertFav = await pool.query('INSERT INTO favourites VALUES ($1,$2,$3)',
    [gameData[0],gameData[1],gameData[2]]);
    res.json(insertFav.rows);
  } catch (err) {
      console.error(err.message);
  }
})


//Update specific favourite
router.put('/:gameid', async (req, res) => {
  try {
    const { gameid } = req.params;
    // console.log(req.body);
    const gameData = [req.body.name, req.body.released, req.body.rating];
    const updateFav = await pool.query('UPDATE favourites SET name=$1, released=$2, rating=$3 WHERE id = $4',
      [gameData[0],gameData[1],gameData[2],gameid]);
    res.json("Favourite game updated");
  } catch (err) {
    console.error(err.message);
  }
})

//Delete specific favourite
router.delete('/:gameid', async (req, res) => {
  try {
    const { gameid } = req.params;
    // console.log(req.body);
    const deleteFav = await pool.query('DELETE FROM favourites WHERE gameid = $1',
      [gameid]);
    res.json("Favourite game deleted");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
