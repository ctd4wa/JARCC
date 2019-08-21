const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model ("school").
// `email` must be of type String
// `email` must be unique
// `email` must match the regex pattern below and throws 
// a custom error message if it does not.
// `date` must be of type Date. The default value is 
// the current date.

const schoolSchema = new Schema ({
  email: {
    type: String,
    unique: true,
    match: [
              /.+@.+\..+/, 
              "Please enter a valid e-mail address"
           ]
  },
    name: String,
    Homework: [{ class: String,
                 assignment: String,
                 dueDate: {
                            type: Date,
                            default: Date.now
                          }
               }]
});

const school = mongoose.model('school', schoolSchema);

module.exports = school;

