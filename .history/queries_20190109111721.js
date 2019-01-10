const db = require('./database-connection');
module.exports = {
   listUser() {
      return db('users')
         .then(users => users)
   },
},
   {
      quote() {
         return db('quotes')
            .then(quotes => quotes)
      },
   }