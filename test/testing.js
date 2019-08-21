const express = require('express');
const router  = express.Router();

// get a list of users from the db (familyCircle)
router.get('/user', function(req, res) {
    res.send({type:'GET'});
});

//add a new user to the db (familyCircle)
router.post('/user', function(req,res){
    res.send({type:'POST'});
});

// update a user in the db (familyCircle)
router.put('/user/:email', function(req, res){
    res.send({type:'PUT'});
});

// delete a user from the db (familyCircle)
router.delete('/user/:email', function(req,res){
    res.send({type:'DELETE'});
});