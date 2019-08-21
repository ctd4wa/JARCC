const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const usersSchema = new Schema ({
    email: {
              type: String,
              unique: true,
              match: [
                        /.+@.+\..+/, 
                        "Please enter a valid e-mail address"
                     ]
            },
    name: String
});


const users = mongoose.model('users', usersSchema);

module.exports = users;

