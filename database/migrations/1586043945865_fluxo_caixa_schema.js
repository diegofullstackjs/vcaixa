'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FluxoCaixaSchema extends Schema {
  up () {
    this.create('fluxo_caixas', (table) => {
      table.increments()
      table.integer('caixa_id').unsigned()
           .references('id').inTable('caixas')
           .onDelete('cascade').onUpdate('cascade')
      table.enu('tipo',['Entrada','Saida'])
      table.integer('categoria_id').unsigned()
      .references('id').inTable('categorias')
      .onDelete('cascade').onUpdate('cascade')
      table.float('valor')
      table.date('data_registro').defaultTo(Date.now())
      table.string('short_description')
      table.timestamps()
    })
  }

  down () {
    this.drop('fluxo_caixas')
  }
}

module.exports = FluxoCaixaSchema
