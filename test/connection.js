const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familcircle');

mongoose.connection.once('open', function() {
   console.log('Connection has been made, you are connected to familyCircle');
}). on('error', function(error) {
        console.log('Connection error:', error);
})