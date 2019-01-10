exports.up = function (knex, Promise) {
   return knex.schema.createTable("user", user => {
      user.string("email");
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("user");

};
