// Express Setup //
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Knex Setup //
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

// bcrypt setup
// let bcrypt = require('bcrypt');
// const saltRounds = 10;

// jwt setup
// const jwt = require('jsonwebtoken');
// let jwtSecret = process.env.jwtSecret;
// if (jwtSecret === undefined) {
//   console.log("You need to define a jwtSecret environment variable to continue.");
//   knex.destroy();
//   process.exit();
// }

// Verify the token that a client gives us.
// This is setup as middleware, so it can be passed as an additional argument to Express after
// the URL in any route. This will restrict access to only those clients who possess a valid token.
// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token)
//     return res.status(403).send({ error: 'No token provided.' });
//   jwt.verify(token, jwtSecret, function(err, decoded) {
//     if (err)
//       return res.status(500).send({ error: 'Failed to authenticate token.' });
//     // if everything good, save to request for use in other routes
//     req.userID = decoded.id;
//     next();
//   });
// }

// multer setup
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'static/uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${req.userID}-${Date.now()}-${file.originalname}`);
//   }
// });
// const upload = multer({storage: storage});

// Login //


app.post('/api/users', (req, res) => {
    if(!req.body.user || !req.body.password)
        return res.status(400).send();
        knex('users').insert({username:req.body.user,password:req.body.password})
        .then(function (result){
          res.status(200).json({userID:result[0]});
        }).catch(error => {
        console.log(error);
        res.status(500).json({ error });
    });
});

app.get('/api/users', (req, res) => {

});

// Users //

// Get my account

app.listen(3000, () => console.log('Server listening on port 3000!'));
