
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 4747 },
        { id: 3564 },
        { id: 7364 }
      ]);
    });
};
