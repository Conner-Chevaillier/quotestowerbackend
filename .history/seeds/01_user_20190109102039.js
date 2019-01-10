
exports.seed = function (knex, Promise) {
  return knex("movies")
    .del()
    .then(function () {
      return knex("user").insert([
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