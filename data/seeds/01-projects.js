exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { project_name: 'Create DB', description: "long project" },
      { project_name: 'Build server', description: "Bla-Bla_bla" }
    ]);
  };