//requiring modules
const express = require('express');
// const bodyParser = require("body-parser");
const router = express.Router();
const pool = require('./db');

router.use(express.json());

router.get('/', async (req, res) => {
    try {
    //   const client = await pool.connect();
      const {resultGames} = await pool.query('SELECT * FROM games');
      // const results = { 'rabc': (result) ? result.rows : null};
      res.send(resultGames.rows);
      // res.render('pages/db', results );
    //   client.release();
    } catch (err) {
        console.error(err.message);
    //   console.error(err);
    //   res.send("Error " + err);
    }
  })


router.post('/', async (req, res) => {
    try {
        var gameData = [req.body.id, req.body.name, req.body.released, req.body.image, req.body.rating];
        // var name = req.body.name;
        // var released = req.body.released;
        // var image = req.body.image;
        // var rating = req.body.rating;

        const {insertGames} = await pool.query('INSERT INTO games VALUES ($1,$2,$3,$4,$5)',
        [gameData[0],gameData[1],gameData[2],gameData[3],gameData[4]]);
        // const results = { 'rabc': (result) ? result.rows : null};
        res.json(insertGames.rows);
        // res.render('pages/db', results );
        // client.release();
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;
