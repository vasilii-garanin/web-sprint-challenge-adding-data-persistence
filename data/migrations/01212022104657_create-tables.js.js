exports.up = function (knex)
{
    return knex.schema
        .createTable('projects', tbl =>
        {
            tbl.increments('project_id');
            tbl.text('project_name')
                .notNullable();
            tbl.text('project_description');
            tbl.boolean('project_completed');
        })
        .createTable('resources', tbl =>
        {
            tbl.increments('resource_id');
            tbl.text('resource_name')
                .notNullable()
                .unique();
            tbl.text('resource_description');
        })
        .createTable('tasks', tbl =>
        {
            tbl.increments('task_id');
            tbl.text('task_description')
                .notNullable();
            tbl.text('task_notes');
            tbl.integer('task_completed')
                .defaultTo(0);
            tbl.integer('project_id')
                .unsigned();
            tbl.foreign('project_id')
                .references('projects.project_id')
                .deferrable('deferred');
        })
        .createTable('project_resources', tbl =>
        {
            tbl.integer('project_id')
                .unsigned();
            tbl.foreign('project_id')
                .references('projects.project_id')
                .deferrable('deferred');
            tbl.integer('resource_id')
                .unsigned();
            tbl.foreign('resource_id')
                .references('resources.resource_id')
                .deferrable('deferred');
        });
};
exports.down = function (knex)
{
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources');
};