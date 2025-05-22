const mongoose = require('mongoose');

const server = 'localhost:27017'; // Correct MongoDB local server address
const database = 'geoffreykemboi'; // Your database name

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(`mongodb://${server}/${database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => {
        console.log('✅ Database connection successful');
      })
      .catch(err => {
        console.error('❌ Database connection error:', err);
      });
  }
}

module.exports = new Database();
