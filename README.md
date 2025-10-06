# Sistema de Delivery - Backend

Este é o backend do projeto de sistema de delivery, desenvolvido em Node.js, TypeScript, Express, Prisma e PostgreSQL. A aplicação é totalmente containerizada com Docker para facilitar a configuração e a execução do ambiente de desenvolvimento.

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
