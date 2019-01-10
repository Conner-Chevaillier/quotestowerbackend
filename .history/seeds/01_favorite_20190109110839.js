
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          quoteId: '4747',
          quote: "Everybody experiences far more than he understands. Yet it is experience, rather than understanding, that influences behavior.",
          author: "Jesus"
        },
        {
          id: 3564,
          quote: "All that is valuable in human society depends upon the opportunity for development accorded the individual.",
          author: "Jesus",
        },
        {
          id: 7364,
          quote: "The time you enjoy wasting is not wasted time.",
          author: "Jesus"
        },
      ]);
    });
};
