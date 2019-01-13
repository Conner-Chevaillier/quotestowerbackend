
exports.seed = function (knex, Promise) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          email: 'downmanboy@gmail.com',
        },
        {
          email: 'Updater@gmail.com',
          faveIDs: [4747]
        },

      ])
    })
}