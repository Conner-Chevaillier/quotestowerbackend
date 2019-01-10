exports.up = function (knex, Promise) {
   return knex.schema.createTable("quotes", quote => {
      quote.string("quoteID")
      quote.increments("id").unique()
      quote.integer("userId").reference("id").inTable('users')
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("quotes")

};


