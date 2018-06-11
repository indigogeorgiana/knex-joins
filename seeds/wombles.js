exports.seed = function (knex, Promise) {
  return knex('wombles').del()
    .then(function () {
      return Promise.all([
        knex('wombles').insert({id: 88801, name: 'Great Uncle Bulgaria', characteristic_id: 99901, rubbish_id: 77701}),
        knex('wombles').insert({id: 88802, name: 'Tobermory', characteristic_id: 99902, rubbish_id: 77703}),
        knex('wombles').insert({id: 88803, name: 'Madame Cholet', characteristic_id: 99903, rubbish_id: 77703}),
        knex('wombles').insert({id: 88804, name: 'Orinoco', characteristic_id: 99904, rubbish_id: 77702}),
        knex('wombles').insert({id: 88805, name: 'Wellington', characteristic_id: 99905, rubbish_id: 77704}),
        knex('wombles').insert({id: 88806, name: 'Tomsk', characteristic_id: 99906, rubbish_id: 77701}),
        knex('wombles').insert({id: 88807, name: 'Bungo', characteristic_id: 99907, rubbish_id: 77705})
      ])
    })
}
