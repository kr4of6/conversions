
exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTable('conversions', function(table) {
    table.increments('id').primary();
    table.string('conversion');
    table.string('recipe');
    table.integer('userID').unsigned().notNullable().references('id').inTable('users');

  }),
]);

};

exports.down = function(knex, Promise) {
return Promise.all([
  knex.schema.dropTable('conversions'),
]);
};
