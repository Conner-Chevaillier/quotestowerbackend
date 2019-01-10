const db = require('./database-connection');
module.exports = {
   listUser() {
      return db('user')
         .then(user => user)
   },
},
   {
      quote() {
         return db('quotes')
            .then(quotes => quotes)
      },
   }