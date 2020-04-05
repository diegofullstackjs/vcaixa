'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserModel = use('App/Models/User');
const CaixaModel = use('App/Models/Caixa')
class CaixaController {

    async list({response,auth})
    {
       const user = await auth.getUser();
       //const me = await UserModel.find(user.id)
       const lacaixa = await CaixaModel.findBy('user_id',user.id)
       const caixas = await lacaixa.FluxoCaixa().fetch();

       
      return response.json({
          caixas: lacaixa,
          fluxo: caixas
      })
    }

    async create({request,auth,response})
    {
        const {caixa,description} = request.all()
        const user = await auth.getUser();

        const data = await CaixaModel.create({
            user_id: user.id,
            name_caixa: caixa,
            short_description : description
        })

        return response.json(data)
    }
}

module.exports = CaixaController
