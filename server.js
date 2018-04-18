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

//register
app.post('/api/users', (req, res) => {
    if (!req.body.user || !req.body.password) {
        console.log(req.body);
        console.log("bad user info");
        console.log(req.body.user, req.body.password);
        return res.status(400).send();
    }
    knex('users').where('username', req.body.user).select('id', 'password').first()
    .then(result => {
        if (result !== undefined) {
            if (result.password === req.body.password) {
                return result.id
            }else{
                throw new Error("Wrong Password");
            }
        }
        return -1;
    }).then(result =>{
        if (result === -1){
            return knex('users').insert({ username: req.body.user, password: req.body.password });
        }
        else 
        {
            return [result];
        }
        
    }).then(function (result) {
    
                res.status(200).json({ userID: result[0] });
            }).catch(error => {
                console.log(error.message);
                res.status(500).json({ error });
            });
});

app.get('/api/users', (req, res) => {

});

// save conversion //
app.post('/api/:userID/conversion', (req, res) => {
    let userID = parseInt(req.params.userID);
    if (!req.body.conversion)
        return res.status(400).send();
    knex('users').where('id', userID).first().then(user => {
        if (user === undefined) {
            res.status(400).send("user does not exist");
            throw new Error("abort");
        }
        return knex('conversions').insert({ conversion: req.body.conversion, userID: userID })
    }).then(result => {
        res.status(200).json({ conversionID: result[0] });
    }).catch(error => {
        if (error.message !== "abort") {
            console.log(error);
            res.status(500).json({ error });
        }
        else {
            console.log(error.message);
        }
    })
});
//get conversions by user //
app.get('/api/:userID/conversion/', (req, res) => {
    let userID = parseInt(req.params.userID);
    knex('conversions').where(userID, userID)
        .select("id", "conversion","recipe")
        .then(result => {
            res.status(200).json({ conversions: result });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ error });
        })
});
//del conver//
app.delete('/api/:userID/conversion/:conversionID', (req, res) => {
    let userID = parseInt(req.params.userID);
    let convID = parseInt(req.params.conversionID);
    return knex('conversions').where({ "id": convID, "userID": userID }).first().del().then(result => {
        if (result === 0) {
            console.log("I didn't delete anything");
        }
        res.status(200).send();
        return;
    }).catch(error => {
        console.log(error);
        res.status(500).json({ error })
    });
    console.log("im here");
});
//update conversion to have  recipe//
app.put('/api/:userID/conversion/:conversionID',(req,res) => {
    let userID = parseInt(req.params.userID);
    let convID = parseInt(req.params.conversionID);
    if(!req.body.recipe)
        return res.status(400).send();
    return knex('conversions').where({ "id": convID, "userID": userID }).first()
    .update({recipe:req.body.recipe}).then(result =>{
        res.status(200).send();
    }).catch(error =>{
        console.log(error);
        res.status(400).send();
    })
});

// Get my account

app.listen(3000, () => console.log('Server listening on port 3000!'));
