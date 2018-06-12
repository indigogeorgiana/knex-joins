exports.up = function (knex, Promise) {
  return knex.schema.table('rubbish', function (table) {
    table.integer('wombles_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('rubbish')
}
