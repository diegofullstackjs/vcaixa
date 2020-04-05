'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserModel = use('App/Models/User')
class AuthController {

    async create({request,response})
     {
         const {username,email,password,nome} = request.all();

         const user = await UserModel.create({
            nome:     nome,
            username: username,
            email:    email,
            password: password

         });

         return response.json(user);
     }
     async auth({request,auth,response})
     {
         const {email,password} = request.all();

         const token = await auth.authenticator('jwt').attempt(email,password)
        
         token.refreshToken = undefined;
         return response.json({
             token: token
         })
     }
}

module.exports = AuthController
