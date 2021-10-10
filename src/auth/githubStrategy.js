const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();

const GitHubStrategy = require('passport-github2').Strategy;


// IMPLEMENT AUTH
passport.use(new GitHubStrategy({
    clientID: "ddd593616ad700a755bf",
    clientSecret: 'b351ae7ab7c88c8c2b31e9f11ac7210148d5f35d',
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function (accessToken, refreshToken, profile, cb) {
    cb(null, profile);
   }
 )
);

//   //ROUTE LOGIN AND DASHBOARD

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/dashboard');
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/');
// });


//AUTH AND GITHUB CALLBACK 
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });



