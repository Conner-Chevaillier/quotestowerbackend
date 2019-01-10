const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
var cors = require('cors')
const fetch = require('./fetch')

app.use(cors())
app.use(bodyParser.json())

// //INDEX ROUTE
// app.get('/', function (req, res) {
//     queries.getAll().then(response => res.send(response))
// })

//ROUTE BELOW FOR FETCHING SINGLE QUOTE
// app.get('/quotes/:user', function (req, res) {
//     queries.getById(req.params.id).then(response => res.send(response))

// })
// //POST ROUTE
// app.post('/quotes/:id', function (req, res) {
//     queries.getById(req.params.id).then(response => {
//         //  res.send(response))
//         console.log("thank you")
//     })

app.get('/', (req, res) => {
    res.send({ success: success })

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