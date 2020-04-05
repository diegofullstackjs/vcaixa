'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FluxoCaixa extends Model {

    fromCaixa(){
        return this.belongsTo('App/Models/Caixa')
    }
    fromCategoria(){
        return this.belongsTo('App/Models/Categoria')
    }
}


module.exports = FluxoCaixa
