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
      let tempFaveArr = []
      let data = {}
      data.quoteId = body.quoteId
      data.quote = body.quote
      data.author = body.author

      return db("quotes").insert(data).returning('*')
         .then(quote => {
            console.log('quote', quote)
            return db('users').where('email', body.userid).returning('faveIDs')
               .then(ids => {
                  tempFaveArr = ids
               })
         })



      // return db('users').where('email', body.userid).update('faveIDs', body.quoteId).returning('faveIDs').then(faveIDs => {
      //    console.log('faveIDs', faveIDs)
      //    return faveIDs;
      // })
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