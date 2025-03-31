# 📌 TPC6 - Aplicacão Web MVC para Contratos Públicos

📅 **Data:** 31 de Março de 2025
👤 **Autor:** [José Rodrigo Ferreira Matos] - A100612
![Foto](../foto.JPG)

---

## 📝 Resumo

Neste TPC foi desenvolvida uma aplicação web para a gestão de contratos públicos, baseada no padrão **MVC** e composta por:

- **MongoDB:** para armazenar a base de dados dos contratos;
- **API em JavaScript:** implementada com **Express.js** e **Mongoose** para a comunicação com o MongoDB;
- **Interface Web:** construída com **Express.js** e templates **PUG** para visualizar os contratos e entidades envolvidas.

Os principais objetivos do projeto foram:

- ✅ Estruturar a aplicação segundo o padrão **MVC** (Model, Controller e Router);
- ✅ Configurar o **Mongoose** para realizar a ligação ao MongoDB;
- ✅ Desenvolver uma API para gestão de contratos, permitindo operações CRUD;
- ✅ Construir uma interface com **PUG** para exibir e manipular os dados de contratos e entidades;
- ✅ Garantir uma navegação intuitiva entre contratos e entidades.

## 🖥️ Funcionalidades Implementadas

### API RESTful

A API suporta as seguintes rotas:

- `GET /contratos` - Retorna todos os contratos;
- `GET /contratos/:id` - Retorna um contrato específico;
- `GET /contratos?entidade=EEEE` - Retorna contratos por entidade;
- `GET /contratos?tipo=AAA` - Retorna contratos por tipo de procedimento;
- `GET /contratos/entidades` - Retorna lista de entidades ordenadas alfabeticamente;
- `GET /contratos/tipos` - Retorna lista de tipos de procedimento;
- `POST /contratos` - Adiciona um novo contrato;
- `DELETE /contratos/:id` - Remove um contrato;
- `PUT /contratos/:id` - Atualiza um contrato existente.

### Interface Web

A aplicação web exibe:

- 📜 **Página principal (`/`)** - Lista de contratos, com links para detalhes do contrato e da entidade;
- 📄 **Página de contrato (`/:id`)** - Exibe os detalhes completos do contrato;
- 🏢 **Página de entidade (`/entidades/:nipc`)** - Mostra todos os contratos de uma entidade e o somatório dos valores.

## 📂 Estrutura do Projeto

```
/my-app
├── app.js
├── models
│   └── contrato.js  # Schema do contrato
├── controllers
│   └── contratoController.js  # Lógica de manipulação dos contratos
├── routes
│   ├── contratoRoutes.js  # Rotas da API
│   └── viewRoutes.js  # Rotas para a interface web
└── views
    ├── index.pug  # Página principal
    ├── contrato.pug  # Página de contrato
    ├── entidade.pug  # Página de entidade
```

---

> Universidade do Minho - 2025
