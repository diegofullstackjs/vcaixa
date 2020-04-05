# API fluxo de caixa


##  instalação

1. Clone o respositorio

2. entre na pasta e use `npm install ou yarn `

3. configure o banco de dados no arquivo `env.example` depois renomeia para `.env`

3. Execute as migration `adonis migration:run`

4. Depois execute `adonis serve --dev`


## Rotas da API

## 1. Criar Conta `http://localhost:3333/api/user/create` POST
```json
{
	"username" : "kanijo22",
	"email" : "kelvin.fabiana@gmail.com",
	"password" : "password",
	"nome" : "kelvin diego"
}
```
Resposta:
```json
{
  "nome": "kelvin diego",
  "username": "kanijo22",
  "email": "kelvin.fabiana@gmail.com",
  "password": "$2a$10$xbQoLv3/hNC5xWQVKbzAcOQpMyE3tGkI3UL1mMgLOaMEw0tVACtb2",
  "created_at": "2020-04-05 01:48:08",
  "updated_at": "2020-04-05 01:48:08",
  "id": 1
}
```

## 2. Autentificação `http://localhost:3333/api/user/login` POST
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
## 2. Criar um novo caixa `http://localhost:3333/caixa/create` POST
```json
{
	"caixa" : "Posto de Gasolina 1",
	"description" : "Rua exemplo 25A"
}
```
Resposta:
```json
{
  "user_id": 1,
  "name_caixa": "Posto de Gasolina 1",
  "short_description": "Rua exemplo 25A",
  "created_at": "2020-04-05 01:48:30",
  "updated_at": "2020-04-05 01:48:30",
  "id": 1
}
```

## 3. Listar todos os caixas `http://localhost:3333/caixa/list` GET
```json
{
  "caixas": {
    "id": 1,
    "user_id": 1,
    "name_caixa": "Posto de Gasolina 1",
    "short_description": "Rua exemplo 25A",
    "total_caixa": 274.75,
    "created_at": "2020-04-05 01:48:30",
    "updated_at": "2020-04-05 01:58:17"
  },
  "fluxo": [
    {
      "id": 1,
      "caixa_id": 1,
      "tipo": "Entrada",
      "categoria_id": 1,
      "valor": 5,
      "data_registro": 1586047678232,
      "short_description": "Cerveja geladinha",
      "created_at": "2020-04-05 01:48:42",
      "updated_at": "2020-04-05 01:48:42"
    },
    {
      "id": 2,
      "caixa_id": 1,
      "tipo": "Entrada",
      "categoria_id": 1,
      "valor": 5,
      "data_registro": 1586047678232,
      "short_description": "Cerveja geladinha",
      "created_at": "2020-04-05 01:48:46",
      "updated_at": "2020-04-05 01:48:46"
    },
    {
      "id": 3,
      "caixa_id": 1,
      "tipo": "Entrada",
      "categoria_id": 1,
      "valor": 5.5,
      "data_registro": 1586047678232,
      "short_description": "Cerveja geladinha",
      "created_at": "2020-04-05 01:48:56",
      "updated_at": "2020-04-05 01:48:56"
    },
    {
      "id": 4,
      "caixa_id": 1,
      "tipo": "Entrada",
      "categoria_id": 1,
      "valor": 6.5,
      "data_registro": 1586047678232,
      "short_description": "Cerveja geladinha",
      "created_at": "2020-04-05 01:51:07",
      "updated_at": "2020-04-05 01:51:07"
    },
    {
      "id": 5,
      "caixa_id": 1,
      "tipo": "Saida",
      "categoria_id": 2,
      "valor": 22,
      "data_registro": 1586047678232,
      "short_description": "Paguei um provedor",
      "created_at": "2020-04-05 01:56:55",
      "updated_at": "2020-04-05 01:56:55"
    },
    {
      "id": 6,
      "caixa_id": 1,
      "tipo": "Entrada",
      "categoria_id": 1,
      "valor": 525.25,
      "data_registro": 1586047678232,
      "short_description": "Cerveja para galerar",
      "created_at": "2020-04-05 01:57:33",
      "updated_at": "2020-04-05 01:57:33"
    },
    {
      "id": 7,
      "caixa_id": 1,
      "tipo": "Saida",
      "categoria_id": 2,
      "valor": 250.5,
      "data_registro": 1586047678232,
      "short_description": "Paguei Provedor",
      "created_at": "2020-04-05 01:58:17",
      "updated_at": "2020-04-05 01:58:17"
    }
  ]
}
```

## Criar categorias  `http://localhost:3333/categoria/create` POST
```json
{
	"categoria" : "Despesas 1",
	"description" : "Despesas Varias"
}
``` 
Resposta:
```json
{
  "user_id": 1,
  "name_categoria": "Despesas 1",
  "short_description": "Despesas Varias",
  "created_at": "2020-04-05 01:55:36",
  "updated_at": "2020-04-05 01:55:36",
  "id": 2
}
```

## Listar Categorias `http://localhost:3333/categoria/list` GET
Resposta:
```json
{
  "total": 2,
  "perPage": 10,
  "page": 1,
  "lastPage": 1,
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "name_categoria": "Cerveja Skol Garrafa",
      "short_description": "Cerveja de Garrafa",
      "created_at": "2020-04-05 01:48:35",
      "updated_at": "2020-04-05 01:48:35"
    },
    {
      "id": 2,
      "user_id": 1,
      "name_categoria": "Despesas 1",
      "short_description": "Despesas Varias",
      "created_at": "2020-04-05 01:55:36",
      "updated_at": "2020-04-05 01:55:36"
    }
  ]
}
```

## Operação com o caixa `http://localhost:3333/fluxo/create/:idcaixa` POST
```json
{
	"tipo" : "Saida",
	"categoria_id" :2,
	"valor" : 250.50,
	"description" : "Paguei Provedor"
}
```
 ***Nota ***
`Você deve enviar categoria e tbm enviar tipo (Entrada ou Saida) e enviar o valor` 

Resposta:
```json
{
  "data": {
    "caixa_id": "1",
    "tipo": "Saida",
    "categoria_id": 2,
    "valor": 250.5,
    "short_description": "Paguei Provedor",
    "created_at": "2020-04-05 01:58:17",
    "updated_at": "2020-04-05 01:58:17",
    "id": 7
  },
  "total_caixa": 274.75
}
```

###  deve enviar token tipo bearer nas rotas de: (Criar Caixa, Listar Caixa, Criar Categorias, Listar Categorias, e Operação com o caixa )


