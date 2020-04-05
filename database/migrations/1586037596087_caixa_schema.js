'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaixaSchema extends Schema {
  up () {
    this.create('caixas', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
            .references('id').inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
      table.string('name_caixa').notNullable()
      table.string('short_description').notNullable()
      table.float('total_caixa')
      table.timestamps()
    })
  }

  down () {
    this.drop('caixas')
  }
}

module.exports = CaixaSchema
