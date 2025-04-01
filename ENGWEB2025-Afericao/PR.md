# Prova Aferição

Este projeto consiste numa aplicação web baseada em **Express.js** e **MongoDB**, que exibe informações sobre livros e autores utilizando **Pug** como motor de templates.

## Requisitos

Antes de executar o projeto, certifica-te de que tens os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Instalação

1. **Clonar o repositório**

   ```sh
   git clone https://github.com/JoseMatos03/EW--A100612.git
   cd EW::A100612/ENGWEB2025-Afericao
   ```

2. **Instalar as dependências**

   ```sh
   npm install
   ```

3. **Configurar o banco de dados**

   - Certifica-te de que o MongoDB está em execução localmente ou em Docker.
   - Se necessário, ajusta a string de conexão no ficheiro `app.js`:
     ```js
     mongoose
       .connect("mongodb://localhost:27017/livros")
       .then(() => console.log("MongoDB conectado"))
       .catch((err) => console.error(err));
     ```

4. **Executar o servidor**

   ```sh
   npm start
   ```

   O servidor será iniciado na porta `17001` por padrão. Acede a `http://localhost:17001` no navegador para visualizar a aplicação.

## Estrutura do Projeto

```
ENGWEB2025-Afericao/
│
├── ex1/
│   ├── api/
│   │   ├── bookAPI.js              # Definição das rotas da API
│   ├── controllers/
│   │   ├── bookController.js       # Lógica para gerir os livros
│   ├── dataset/
│   │   ├── changes.txt             # Mudanças realizadas ao dataset
│   │   ├── cleaned_dataset.json    # Dataset limpo
│   │   ├── dataset.json            # Dataset original
│   │   ├── cleaner.py              # Script para limpar o dataset
│   ├── models/
│   │   ├── book.js                 # Modelo Mongoose para livros
│   ├── queries.txt                 # Ficheiro com a resolução das queries
│
├── ex2/
│   ├── routes/
│   │   ├── views.js                # Rotas para renderizar páginas com Pug
│   ├── views/
│   │   ├── author.pug              # Página do autor
│   │   ├── book.pug                # Página de um livro específico
│   │   ├── index.pug               # Página principal com a lista de livros
│   │   ├── layout.pug              # Layout base para as páginas
│
├── node_modules/
├── app.js                          # Ficheiro principal da aplicação
├── engweb2025_africao.pdf
├── package-lock.json
├── package.json
├── PR.md                           # Este guia

```

## Rotas Disponíveis

### API

- `GET /api/books` → Lista todos os livros
- `GET /api/books/:id` → Obtém um livro pelo seu ID
- `GET /api/books/genres` → Obtém a lista de géneros únicos
- `GET /api/books/characters` → Obtém a lista de personagens únicos
- `POST /api/books` → Adiciona um novo livro
- `DELETE /api/books/:id` → Remove um livro pelo ID
- `PUT /api/books/:id` → Atualiza um livro pelo ID

### Views (Interface)

- `GET /` → Página inicial com a lista de livros
- `GET /:id` → Página com os detalhes de um livro
- `GET /entidades/:authorId` → Página de um autor com a sua lista de livros
