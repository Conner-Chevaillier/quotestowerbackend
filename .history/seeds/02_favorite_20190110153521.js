
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {
          user_id: 1,
          quoteId: '4747',
          quote: "Everybody experiences far more than he understands. Yet it is experience, rather than understanding, that influences behavior.",
          author: "Jesus",
        },
        {
          user_id: 2,
          quoteId: '3564',
          quote: "All that is valuable in human society depends upon the opportunity for development accorded the individual.",
          author: "Jesus",
        },
        {
          user_id: 3,
          quoteId: '7364',
          quote: "The time you enjoy wasting is not wasted time.",
          author: "Jesus"
        },
      ]);
    });
};
