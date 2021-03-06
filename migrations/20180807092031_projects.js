exports.up = function (knex, Promise) {
  return knex.schema.createTable('projects', projects => {
    projects.increments();
    projects.string('name');
    projects.string('snippet');
    projects.text('description');
    projects.string('gifURL');
    projects.string('deployedURL');
    projects.string('githubURL');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};