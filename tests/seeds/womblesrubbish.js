
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('rubbish').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('rubbish').insert({id: 77701, name: 'polystyrene', wombles_id: 88801}),
        knex('rubbish').insert({id: 77702, name: 'tin can', wombles_id: 88802}),
        knex('rubbish').insert({id: 77703, name: 'nappy', wombles_id: 88802}),
        knex('rubbish').insert({id: 77704, name: 'coffee cup', wombles_id: 88804}),
        knex('rubbish').insert({id: 77705, name: 'plastic', wombles_id: 88806}),
        knex('rubbish').insert({id: 77706, name: 'dust', wombles_id: 88807})
      ])
    })
}
