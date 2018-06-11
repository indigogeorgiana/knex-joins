
exports.up = (knex, Promise) => {
  return knex.schema.table('wombles', table => {
    table.integer('rubbish_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropColumn('rubbish_id')
}
