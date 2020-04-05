# API fluxo de caixa


##  instalação

1. Clone o respositorio

2. entre na pasta e use `npm install ou yarn `

3. Execute as migration `adonis migration:run`

4. Depois execute `adonis serve --dev`


## Rotas da API

1. Criar Conta `http://localhost:3333/api/user/create`
```json
{
	"username" : "kanijo22",
	"email" : "kelvin.fabiana@gmail.com",
	"password" : "password",
	"nome" : "kelvin diego"
}
```
2. Autentificação
```json
{
	"email" : "kelvin.fabiana@gmail.com",
	"password" : "password"
}
```
Resposta:
```json
{
  "token": {
    "type": "bearer",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4NjA0NzY5MX0.adZUwwLThCby-aGYHbTgybVeLeiVl4YuxfuXBmZIjy0"
  }
}

```
2. Criar um novo Caixa
```json
{
	"caixa" : "Posto de Gasolina 1",
	"description" : "Rua exemplo 25A"
}
```
###  deve enviar token tipo bearer


