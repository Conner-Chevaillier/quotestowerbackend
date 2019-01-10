exports.up = function (knex, Promise) {
   return knex.schema.createTable("quotes", quote => {
      quote.string("quoteID")
      quote.increments("id")
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("quotes")

};


