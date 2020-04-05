'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  Route.post('user/create','Account/AuthController.create')
  Route.post('user/login','Account/AuthController.auth')


   /* Todas as rotas que tem que estar autenticado */ 

  Route.post('caixa/create', 'Authenticated/CaixaController.create').middleware('auth:jwt') /* criar novo caixa  */
  Route.get('caixa/list','Authenticated/CaixaController.list').middleware('auth:jwt')    /* listar caixas criados*/

  Route.post('categoria/create','Authenticated/CategoriaController.create').middleware('auth:jwt') /*Criar Categoria*/
  Route.get('categoria/list','Authenticated/CategoriaController.list').middleware('auth:jwt') /*Listar Categoria*/

  Route.get('fluxo/list/:caixaID','Authenticated/FluxoCaixaController.show')
  Route.post('fluxo/create/:caixaID','Authenticated/FluxoCaixaController.create').middleware('auth:jwt') /*Criar Movimento Caixa*/
}).prefix('api/')