//requiring modules
const express = require('express');
// const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const app = express();

//Oauth
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
require('./passport');


// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());


//requiring models
const favouritesRoutes = require('./src/routes/favourites');
const gamesRoutes = require('./src/routes/games');

//Routes
app.use("/favourites", favouritesRoutes);
app.use("/games", gamesRoutes);
app.use("/games", gamesRoutes);


app.get('/', (req,res) => {
  res.send('Hello World, you are not logged in')
});




const isLoggedIn = (req, res, next) => {
  if(name){
    next();
  } else{
    res.sendStatus(401);
  }
}

app.use(cookieSession({
  name: 'video-games-session',
  keys: ['key1', 'key2']
}))


var name=null;
app.get('/user', isLoggedIn, (req, res) => {
  // console.log("asfda "+name);

  res.send(`Welcome ${name}!`)
});

app.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/login/callback', passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/user');
    name=req.user.displayName;
  });

app.get('/logout', (req, res) => {
  req.session = null;
  name=null;
  req.logout();
  res.redirect('/');
});



// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ` + port);
});

