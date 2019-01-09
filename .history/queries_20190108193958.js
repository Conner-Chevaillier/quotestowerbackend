const db = require('./database-connection');
module.exports = {
   listAuthors() {
      return db('user')
         .then(user => user)
   },
}