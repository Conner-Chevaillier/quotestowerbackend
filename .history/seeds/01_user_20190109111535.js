
exports.seed = function (knex, Promise) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          Email: 'downmanboy@gmail.com',

        },
        {
          Email: 'manboy@gmail.com',

        },
        {
          Email: 'Updater@gmail.com',

        },

      ])
    })
}