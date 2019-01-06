exports.up = function (knex, Promise) {
   return knex.schema.createTable("quotes", quote => {
      quote.increments("id")
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("quotes);

};


