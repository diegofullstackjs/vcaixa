'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Caixa extends Model {

    user(){
        return this.belongsTo('App/Models/User')
    }
    FluxoCaixa(){
        return this.hasMany('App/Models/FluxoCaixa')
    }
}


module.exports = Caixa
