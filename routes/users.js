const knex = require('../database-connection') // TODO: Adjust path as needed!

// RESTful Knex Router Template:
const router = module.exports = require('express').Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

// TODO: Don't forget data validation/restrictions:
// - use regex, mongoose, Joi, bookshelf, *schema lib, etc. many options: choose one

// OPTIONAL/TODO: Move `getQueryOptions` into some shared js file
function getQueryOptions(query) {
   let {
      offset = 0,
      limit = 20,
      orderBy = '-id'
   } = query
   offset = Math.abs(parseInt(offset, null))
   limit = Math.abs(parseInt(limit, null))
   orderBy = orderBy[0] === '-' ? [orderBy.slice(1), 'desc'] : [orderBy, 'asc']
   offset = offset > 100000 ? 100000 : offset
   limit = limit > 100 ? 100 : limit
   return { offset, limit, orderBy }
}

function getAll(req, res, next) {
   const { limit, offset, orderBy } = getQueryOptions(req.query)
   knex('users')
      .select('*')
      .limit(limit)
      .offset(offset)
      .orderBy(...orderBy)
      .then(users => res.status(200).send({ data: users }))
      .catch(next)
}

function getOne(req, res, next) {
   knex('users')
      .select('*')
      .limit(1)
      .where({ id: req.params.id })
      .then(([user]) => {
         if (!user) return res.status(404).send({ message: 'user not found.' })
         res.status(200).send({ data: user })
      })
      .catch(next)
}

function create(req, res, next) {
   // TODO: Validate input data
   knex('users')
      .insert(req.body)
      .then(() => res.status(201).json({ data: req.body }))
      .catch(next)
}

function update(req, res, next) {
   // TODO: Validate input data
   knex('users')
      .where({ id: req.params.id })
      .update(req.body)
      .then(count => count >= 1
         ? res.status(200).json({ data: req.body })
         : res.status(410).json())
      .catch(next)
}

function remove(req, res, next) {
   // TODO: Validate authentication
   knex('users').where({ id: req.params.id })
      .delete()
      .then(count => count >= 1
         ? res.status(204).json()
         : res.status(404).json({ message: 'Nothing deleted!' }))
      .catch(next)
}

