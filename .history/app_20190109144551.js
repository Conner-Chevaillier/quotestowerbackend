const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
var cors = require('cors')
const queries = require('./queries')
const fetch = require('./fetch')

app.use(cors())
app.use(bodyParser.json())

// //INDEX ROUTE
// app.get('/', function (req, res) {
//     queries.getAll().then(response => res.send(response))
// })

// ROUTE BELOW FOR FETCHING SINGLE QUOTE
app.get('/quotes/:email', function (req, res) {
    queries.joinGetQuotebyEmail(req.params.email).then(response => {
        // res.send(response[0])
        res.send({ quote: response.quote, author: response.author })

    })
})

//POST ROUTE
// app.post('/quotes', function (req, res) {
//     queries.joinGetQuotebyEmail(req.body.email).then(response => {
//         res.send(response[0])

//     })
// })


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
    res.send('Page Not Found: 404')
})

//HOSTING

app.listen(port, function () {
    console.log('Serving on port 3001.')
})