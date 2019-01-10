exports.up = function (knex, Promise) {
   return knex.schema.createTable("users", user => {
      user.increments("id");
      user.string("email");
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("users");

};
