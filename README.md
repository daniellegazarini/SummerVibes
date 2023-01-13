
# Boas vindas ao SummerVibes

O objetivo desse exercício é a construção de uma API, com arquitetura MSC, que consuma dados de um banco de dados sobre localidades brasileiras que são visitadas no verão. 

Nossa API será capaz de: 
- ler e listar as localidades cadastradas no banco de dados;
- cadastrar uma nova localidade;
- deletar uma localidade.

## Requisitos


### O1 - Crie o endpoit para listar as localidades
- O endpoit deverá ser acessível através do caminho `/summer` 
- Atravês do caminho `/summer`  todos as localidades deverão ser retornadas.
- Através do caminho `/summer/:id`, apenas a localidade referente ao id deverá ser retornada.
- Ao listar a(as) localidade(s) com sucesso, o status retornado deverá ser `200` 
- Caso a localidade não exista, retornar o status `404` e a mensagem:
```json
    { "message": "Localidade não encontrada" }
```
### 02 - Crie um endpoit para cadastrar uma localidade
- o endpoit deve ser acessível através do caminho `/summer`
- As localidades devem ser salvas no banco de dados
- o corpo da requisição deverá ter o formato

```json
  [
    {
    "person": "Julia",
    "place": "Ilhabela",
    "location": "Sao Paulo",
    "activities": "fugir dos borrachudos"
    },
    {
    "person": "Rafael",
    "place": "Saquarema",
    "location": "Rio de Janeiro",
    "activities": "surf"
    }  
  ]
```
- o campo `person` deve ter, no mínimo, 5 caracteres. Caso não tenha, retornar o status `422`e a mensagem:
```json
    { "message": "o campo person deve possuir 5 ou mais caracteres" }
```
- Caso as localidades sejam salvas com sucesso, retornar o status `201` e a lista de todas as localidades.


### 03 - Crie um endpoint para deletar uma localidade
- o endpoint deverá ser acessível através do caminho `/summer/:id`
- O local deletado deverá ser o de id correspondente ao id da URL
- caso seja deletado com sucesso, a requisição terá como resposta o status `200` e a mensagem:
```json
    { "message": "Local deletado com sucesso" }
```

