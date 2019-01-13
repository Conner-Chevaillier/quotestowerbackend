const db = require('./database-connection');
module.exports = {
   listUser() {
      return db('users')
         .then(users => users)
   },
   quote() {
      return db('quotes')
         .then(quotes => quotes)
   },
   joinGetQuotebyEmail(email) {
      console.log('email', email)
      return db('users').innerJoin('quotes', 'quotes.id', 'users.id')
         .select(
            'users.email',
            'quotes.quote',
            'quotes.author',
         )
         .where('users.email', email)
         .returning('*');
   },
   // postNewSavedQuote(email) {
   //    console.log('email', email)
   //    return db('users').innerJoin('quotes', 'quotes.id', 'users.id')
   //       .select(
   //          'users.email',
   //          'quotes.quote',
   //          'quotes.author',
   //       )
   //       .where('users.email', email)
   //       .returning('*');
   // }
}