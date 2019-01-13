exports.up = function (knex, Promise) {
   return knex.schema.createTable("quotes", quote => {
      quote.string("quoteId")
      quote.increments("id").unique()
      quote.integer("userid")
      quote.text("quote")
      quote.string("author")
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("quotes")
};


