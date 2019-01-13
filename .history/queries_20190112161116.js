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
   postNewSavedQuote(body) {
      console.log('body', body)
      return db("quotes").insert(body).returning('*')
   }

   knex.insert([{ title: 'Great Gatsby' }, { title: 'Fahrenheit 451' }], ['id']).into('books')



   // postNewSavedQuote(body) {
   //    console.log('body', body)
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