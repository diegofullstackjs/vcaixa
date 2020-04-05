'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriasSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      .references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('name_categoria').notNullable().unique();
      table.string('short_description').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriasSchema
