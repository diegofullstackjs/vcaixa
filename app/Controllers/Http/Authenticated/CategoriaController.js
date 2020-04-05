'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CatModel = use('App/Models/Categoria');
const UserModel = use('App/Models/User')
class CategoriaController {

     async list({response,auth})
     {
        const user = await auth.getUser()
        const me = await UserModel.find(user.id)
        const categorias = await me.categorias().paginate(1,10)

        return response.json(categorias)

     }
    async create({response,auth,request})
    {
        const {categoria,description} = request.all()
        const user = await auth.getUser()

        const data = await CatModel.create({
            user_id: user.id,
            name_categoria: categoria,
            short_description: description
        })

        return response.json(data)

    }
}

module.exports = CategoriaController
