'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const FluxoCaixa = use('App/Models/FluxoCaixa')
const Caixa = use('App/Models/Caixa');
class FluxoCaixaController {


    async create({params,request,response,auth})
    {

        const {caixaID} = params
        const {tipo,categoria_id,description,valor} = request.all()

        const caixa_select = await Caixa.find(caixaID);
        
        const fluxo = await FluxoCaixa.create({
            caixa_id : caixaID,
            tipo: tipo,
            categoria_id : categoria_id,
            valor: valor,
            short_description : description
        });
        if(tipo === 'Entrada')
        {
            caixa_select.total_caixa = caixa_select.total_caixa + valor;
        }else{  
            caixa_select.total_caixa = caixa_select.total_caixa - valor;
        }
       

       await caixa_select.save();
      return response.json({
          data: fluxo,
          total_caixa: caixa_select.total_caixa
      })

    }
}


module.exports = FluxoCaixaController
