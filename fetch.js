
const fetch = require('node-fetch');

module.exports = {
   fetchQuote: () => {
      // return 'starting quote fetch'
      return fetch(`https://favqs.com/api/qotd`)
         .then(res => res.json())
         .catch(err => console.log(err))
   }
}  
