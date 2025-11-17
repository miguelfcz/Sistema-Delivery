# Cardapio Digital - Backend

Este é o backend do projeto de u cardapio digital, desenvolvido em Node.js, TypeScript, Express, Prisma e PostgreSQL. A aplicação é totalmente containerizada com Docker para facilitar a configuração e a execução do ambiente de desenvolvimento.

## Funcionalidades

* **Autenticação de Usuários:** Cadastro e login com JWT (JSON Web Tokens).
* **Gerenciamento de Usuários:** Rotas para criação e visualização de perfil de usuário.
* **Rotas Protegidas:** Uso de middleware para garantir que apenas usuários autenticados possam acessar certos endpoints.
* **Banco de Dados:** Integração com PostgreSQL através do ORM Prisma.

## Pré-requisitos

* [Docker](https://www.docker.com/products/docker-desktop/) e [Docker Compose](https://docs.docker.com/compose/install/) instalados em sua máquina.

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento localmente.

### 1. Clonar o Repositório

Primeiro, clone este repositório para a sua máquina local.

```bash
git clone <url-do-seu-repositorio>
cd sistema-delivery
```
### 2. Configurar Variáveis de Ambiente

Crie uma cópia do arquivo de exemplo .env.example e renomeie-a para .env. Este arquivo contém as chaves e URLs necessárias para a aplicação.

```bash
cp .env.example .env
```

### 3. Subir os Contêineres

Use o Docker Compose para construir as imagens e iniciar os contêineres da aplicação e do banco de dados.

```bash
docker-compose up --build
```

Após executar este comando, você terá:

  * O servidor da API rodando em http://localhost:3000.

  * O banco de dados PostgreSQL acessível na porta 5432.

### 4. Rodar as Migrations do Banco de Dados

Com os contêineres rodando, abra um novo terminal e execute o seguinte comando para que o Prisma crie as tabelas no banco de dados.

```bash
docker-compose exec app npx prisma migrate dev --name init
```
# Documentação da API - Sistema de Delivery

Esta é a documentação completa para todos os endpoints do backend do Sistema de Delivery.

## Autenticação

As rotas protegidas (marcadas com 🔐) exigem um token de autenticação no cabeçalho da requisição:

`Authorization: Bearer <seu_token_jwt>`

---

### 1. Autenticação

#### `POST /api/auth/login`

Autentica um usuário existente e retorna um token JWT para ser usado nas rotas protegidas.

**Request Body:**
```json
{
  "email": "seu-email@exemplo.com",
  "senha": "sua-senha"
}
```
Responses:

* 200 OK: Login bem-sucedido. Retorna o token.
  ```json
  {
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
* 401 Unauthorized: Credenciais inválidas (usuário não encontrado ou senha incorreta).

### 2. Usuários

#### POST /api/usuarios

Cria um novo usuário no sistema. A validação dos dados é feita com Zod.

**Request Body:**

```json
{
  "nome": "João da Silva",
  "email": "joao.silva@exemplo.com",
  "senha": "senhaSegura123"
}
```

Responses:

* 201 Created: Usuário criado com sucesso. Retorna o objeto do usuário (sem a senha).
* 400 Bad Request: Erro de validação (ex: email inválido, senha curta) ou email já cadastrado.
```
🔐 GET /api/usuarios/profile
```
Retorna as informações do perfil do usuário atualmente autenticado.

Authorization:

* Type: Bearer Token

Responses:

* 200 OK: Retorna o objeto do perfil do usuário.
* 401 Unauthorized: Token não fornecido ou inválido.
* 404 Not Found: Usuário associado ao token não encontrado no banco de dados.

### 3. Estabelecimentos
```
GET /api/estabelecimentos
```

Lista todos os estabelecimentos que estão ativos (ativo: true).

Responses:

* 200 OK: Retorna um array de estabelecimentos.

```
GET /api/estabelecimentos/:id
```
Busca um estabelecimento específico pelo seu ID, incluindo a lista de produtos associados.

Responses:

* 200 OK: Retorna o objeto do estabelecimento com seus produtos.
* 404 Not Found: Estabelecimento não encontrado.
```
🔐 POST /api/estabelecimentos
```
Cria um novo estabelecimento para o usuário autenticado.

Authorization:

* Type: Bearer Token

**Request Body:**
```json
{
  "nome": "Restaurante do Miguel",
  "endereco": "Rua Principal, 123"
}
```

Responses:

* 201 Created: Estabelecimento criado com sucesso.
* 400 Bad Request: Nome do estabelecimento não fornecido.
* 401 Unauthorized: Token não fornecido ou inválido.

```
🔐 PUT /api/estabelecimentos/:id
```
Atualiza um estabelecimento. Apenas o dono pode realizar esta ação.

Authorization:

* Type: Bearer Token

**Request Body:**
```json
{
  "nome": "Novo Nome do Restaurante",
  "endereco": "Novo Endereço, 456"
}
```

Responses:

* 200 OK: Estabelecimento atualizado.
* 403 Forbidden: Usuário não é o dono do estabelecimento.
* 404 Not Found: Estabelecimento não encontrado.
```
🔐 DELETE /api/estabelecimentos/:id
```

Desativa um estabelecimento (ativo: false). Apenas o dono pode realizar esta ação.

Authorization:

* Type: Bearer Token

Responses:

* 200 OK: Estabelecimento desativado.
* 403 Forbidden: Usuário não é o dono do estabelecimento.
* 404 Not Found: Estabelecimento não encontrado.

### 4. Produtos
```
GET /api/produtos
```
Lista os produtos de um estabelecimento específico usando um query parameter.

Query Parameters:

* estabelecimentoId (obrigatório): O ID do estabelecimento.

    * Exemplo: /api/produtos?estabelecimentoId=1

Responses:

* 200 OK: Retorna um array de produtos.
* 400 Bad Request: estabelecimentoId não fornecido.
```
GET /api/produtos/:id
```
Busca um produto específico pelo seu ID.

Responses:

* 200 OK: Detalhes do produto.
* 404 Not Found: Produto não encontrado.

```
🔐 POST /api/produtos
```

Cria um novo produto. Apenas o dono do estabelecimento pode realizar esta ação.

Authorization:

* Type: Bearer Token

**Request Body:**
```json
{
  "nome": "X-Burger Especial",
  "descricao": "Pão, hambúrguer, queijo e salada",
  "preco": 15.50,
  "estabelecimentoId": 1
}
```
Responses:

* 201 Created: Produto criado com sucesso.
* 403 Forbidden: Usuário não é o dono do estabelecimento.
* 404 Not Found: Estabelecimento não encontrado.
```
🔐 PUT /api/produtos/:id
```
Atualiza um produto. Apenas o dono do estabelecimento pode realizar esta ação.

Authorization:

* Type: Bearer Token

**Request Body:**
```json
{
  "nome": "Super X-Burger",
  "preco": 18.00
}
```

Responses:

* 200 OK: Produto atualizado.
* 403 Forbidden: Usuário não é o dono.
* 404 Not Found: Produto não encontrado.
```
🔐 DELETE /api/produtos/:id
```

Deleta um produto. Apenas o dono do estabelecimento pode realizar esta ação.

Authorization:

* Type: Bearer Token

Responses:

* 204 No Content: Produto deletado com sucesso.
* 403 Forbidden: Usuário não é o dono.
* 404 Not Found: Produto não encontrado.

### 5. Pedidos
```
🔐 POST /api/pedidos
```
Cria um novo pedido para o usuário autenticado.

Authorization:

* Type: Bearer Token

**Request Body:**
```json
{
  "estabelecimentoId": 1,
  "itens": [
    { "produtoId": 1, "quantidade": 2 },
    { "produtoId": 3, "quantidade": 1 }
  ]
}
```
Responses:

* 201 Created: Pedido criado com sucesso.
* 404 Not Found: Um dos produtos ou o estabelecimento não foi encontrado.

```
🔐 GET /api/pedidos
```
Lista todos os pedidos feitos pelo usuário autenticado.

Authorization:

* Type: Bearer Token

Responses:

* 200 OK: Retorna um array com os pedidos do usuário.

```
🔐 PATCH /api/pedidos/:id/cancelar
```

Cancela um pedido. Apenas o cliente que fez o pedido pode cancelá-lo, e somente se o status for PENDENTE.

Authorization:

* Type: Bearer Token

Responses:

* 200 OK: Pedido cancelado com sucesso.
* 400 Bad Request: O pedido não pode mais ser cancelado (status não é PENDENTE).
* 403 Forbidden: Usuário não é o dono do pedido.
* 404 Not Found: Pedido não encontrado.
