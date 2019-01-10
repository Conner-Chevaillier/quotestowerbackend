
exports.seed = function (knex, Promise) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          email: 'downmanboy@gmail.com',
        },
        {
          email: 'conner@gmail.com'
        },
        {
          email: 'Updater@gmail.com',
        },

      ])
    })
}