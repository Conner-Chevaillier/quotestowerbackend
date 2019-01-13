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
      let data = {}
      data.quoteId = body.quoteId
      data.quote = body.quote
      data.author = body.author
      db("quotes").insert(data).returning('*')
      return db('users').where('email', body.userid).update('faveIDs', body.quoteId).returning('faveIDs')
   }




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