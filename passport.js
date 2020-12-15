const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    // User.findById(id, function(err, user) {
    done(null, user);
    // });
});


passport.use(new GoogleStrategy({
    clientID: "947828860166-g72vv0d5c7purcel6h3gc1shehm7sul4.apps.googleusercontent.com",
    clientSecret: "m7l8Cr4_JycUAijpkeNumWek",
    callbackURL: "https://rest-video-games.herokuapp.com/"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    // console.log("sdfa "+profile.displayName);;  
    return done(null, profile);
    // });
  }
));