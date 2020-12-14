'use strict';

const response = require("./res");
const connection = require("./favourites");
// const routes = require("./db");

exports.index = function (req, res) {
    response.ok("Aplikasi berjalan", res)
}

exports.showGames = function (req, res) {
    // try {
    //     const client = await pool.connect();
    //     const result = await client.query('SELECT * FROM favourites');
    //     // const results = { 'rabc': (result) ? result.rows : null};
    //     res.send(result.rows);
    //     // res.render('pages/db', results );
    //     client.release();
    //   } catch (err) {
    //     console.error(err);
    //     res.send("Error " + err);
    //   }
}

//Add Games
exports.addGames = function (req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var released = req.body.released;
    var image = req.body.image;
    var rating = req.body.rating;


    connection.query('INSERT INTO games VALUES (?,?,?,?,?)',
        [id, name, released, image, rating],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Game added successfully!", res)
            }
        });
};