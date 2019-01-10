exports.up = function (knex, Promise) {
   return knex.schema.createTable("quotes", quote => {
      quote.string("quoteId")
      quote.increments("id").unique()
      quote.integer("userId").references("id").inTable('users')
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("quotes")

};


