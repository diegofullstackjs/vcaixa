'use strict'

const { test } = use('Test/Suite')('Criar Conta')
const User = use('App/Models/User')
test('Criando Usuario Desde Api', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})
