const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
var cors = require('cors')
const queries = require('./queries')
const fetch = require('./fetch')
const knex = require('./database-connection')

app.use(cors())
app.use(bodyParser.json())


// app.use('/users', require('./routes/users'))
// app.use('/quotes', require('./routes/quotes')
app.post('/faves', (req, res) => {
    console.log("hit ", req.body)

    queries.postNewSavedQuote(req.body).then(quote => {
        console.log(quote)
        res.json(quote[0])
    })
    // console.log()
})


app.post('/quotes/:email', getOne)
function getOne(req, res, next) {
    knex('email')
        .select('*')
        .where({ email: req.params.email })
        .then((quotes) => {
            if (!quotes) return res.status(404).send({ message: 'Item not found.' })
            res.status(200).send({ data: quotes })
        })
        .catch(next)
}

// app.get('/quotes/:email', getOne)
// function getOne(req, res, next) {
//     knex('email')
//         .select('*')
//         .where({ email: req.params.email })
//         .then((quotes) => {
//             if (!quotes) return res.status(404).send({ message: 'Item not found.' })
//             res.status(200).send({ data: quotes })
//         })
//         .catch(next)
// }


// ROUTE BELOW FOR FETCHING SINGLE QUOTE
app.get('/quotes/:email', function (req, res) {
    console.log('route hit')
    queries.joinGetQuotebyEmail(req.params.email).then(response => {
        // res.send(response[0])
        console.log(response)
        res.send({ quote: response[0].quote, author: response[0].author })
    })
})
// 

app.get('/', (req, res) => {
    res.send({ success: "success" })

})

//GET ROUTE
app.get('/quotes', (req, res) => {
    fetch.fetchQuote().then(result => {
        res.send(result)
    })

    // queries.getQuote(req.body).then(item => res.send(item))
})

//UPDATE ROUTE
app.put('/quotes', (req, res) => {
    queries.updateQuote(req.params.id, req.body).then(data => res.json(data[0]))
})

//DELETE BY ID ROUTE
app.delete('/quotes/:id', (req, res) => {
    queries.deleteQuote(req.params.id).then(res.sendStatus(204))

})

//DELETE ALL ROUTE
app.delete('/quotes/:id', (req, res) => {
    queries.deleteAll().then(res.sendStatus(204))
})

//ERROR ROUTE

app.get('*', function (req, res) {
    res.status(404).send('Page Not Found: 404')
})

//HOSTING

app.listen(port, function () {
    console.log('Serving on port 3001.')
})