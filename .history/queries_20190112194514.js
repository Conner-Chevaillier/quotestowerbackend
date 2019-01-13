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
      let promiseArr = []
      return db('users').where('email', email).select('faveIDs')
         .then(ids => {
            ids.map(id => {
               console.log('id', id)
               promiseArr.push(db('quotes').where('quoteId', id).select('*'))
            })
            return Promise.all(promiseArr)
         })
      // return db('users').innerJoin('quotes', 'quotes.id', 'users.id')
      //    .select(
      //       'users.email',
      //       'quotes.quote',
      //       'quotes.author',
      //    )
      //    .where('users.email', email)
      //    .returning('*');
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
            return db('users').where('email', body.userid).select('faveIDs')
               .then(ids => {

                  tempFaveArr = ids[0].faveIDs
                  tempFaveArr.push(body.quoteId)

                  return db('users').where('email', body.userid).update('faveIDs', tempFaveArr).returning('*')
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