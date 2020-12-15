//requiring modules
const express = require('express');
const app = express();

//requiring models
const favouritesRoutes = require('./favourites');
const gamesRoutes = require('./games');

//Routes
app.use("/favourites", favouritesRoutes);
app.use("/games", gamesRoutes);


app.get('/',  (req, res) => {
  res.send('Hello World')
  // res.render("index")
});


// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ` + port);
});

