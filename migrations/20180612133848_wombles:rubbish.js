
exports.up = function (knex, Promise) {
  return knex.schema.table('womble', function (table) {
    table.integer('rubbish_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('wombles_rubbish')
}
