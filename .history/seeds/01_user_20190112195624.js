
exports.seed = function (knex, Promise) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          email: 'downmanboy@gmail.com',
          faveIDs: [7364]
        },
        {
          email: 'Updater@gmail.com',
          faveIDs: [4747, 3564]
        },

      ])
    })
}