exports.up = function (knex, Promise) {
   return knex.schema.createTable("users", user => {
      user.increments("id").unique();
      user.string("email");
      user.specificType('faveIDs', 'int[]');
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("users");
};
