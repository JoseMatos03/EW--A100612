# 📌 TPC5 - App Web MVC

📅 **Data:** 11 de Fevereiro de 2025
👤 **Autor:** [José Rodrigo Ferreira Matos] - A100612
![Foto](../foto.JPG)

---

## 📝 Resumo

Neste TPC foi desenvolvida uma aplicação web com três servidores, composta por:

- **MongoDB:** para armazenar a base de dados das publicações;
- **API em JavaScript:** implementada com **Mongoose** para a comunicação com o MongoDB;
- **Interface Web:** construída com **Express.js** e templates **PUG** para realizar operações CRUD.

Os principais objetivos do projeto foram:

- ✅ Estruturar a aplicação usando o padrão **MVC** (Model, Controller e Router)
- ✅ Configurar o **Mongoose** para efetuar a ligação ao MongoDB (incluindo testes com Docker)
- ✅ Desenvolver a interface com **PUG** permitindo criar, ler, atualizar e apagar publicações
- ✅ Garantir a integração entre a API e a interface web para uma experiência dinâmica e consistente

## 🐂 Resultados

- A aplicação permite executar todas as operações CRUD de forma integrada com o MongoDB
- Foram implementados testes e verificações para garantir que a API e a interface se comunicam corretamente com a base de dados
- A resolução de problemas com Docker e redes possibilitou a ligação correta entre os containers e a aplicação

## Os ficheiros resultantes deste TPC são os seguintes:

- [Model](./models/publication.js) - Define o schema da publicação
- [Controller](./controllers/publicationController.js) - Implementa as operações CRUD
- [Router](./routes/publicationRouter.js) - Mapeia as rotas para o controller
- [Servidor Principal](./app.js) - Integra todas as componentes da aplicação
- [Templates PUG](./views/) - Renderizam a interface web para as operações de publicações

## 📌 Notas Adicionais

- A aplicação segue a estrutura clássica **MVC** para uma melhor organização e manutenção do código
- A utilização do **Mongoose** facilita a interação com o MongoDB e a definição de modelos de dados
- A integração com Docker exigiu atenção à configuração de redes para que a aplicação e o MongoDB se comuniquem corretamente
- O uso do **PUG** para os templates garante uma renderização rápida e limpa das páginas web

---

> Universidade do Minho - 2025
