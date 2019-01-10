exports.up = function (knex, Promise) {
   return knex.schema.createTable("users", user => {
      user.string("email");
      user.string("User_Name");
   })
};
exports.down = function (knex, Promise) {
   return knex.schema.dropTableIfExists("user");

};
