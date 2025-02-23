# 📌 TPC" - Escola de Música

📅 **Data:** 11 de Fevereiro de 2025
👤 **Autor:** [José Rodrigo Ferreira Matos] - A100612
![Foto](../foto.JPG)

---

## 📝 Resumo

Neste TPC foi desenvolvida uma aplicação web utilizando **Express.js** e **EJS** para renderizar conteúdo dinâmico no lado do servidor proveniente duma base de dados
em **json-server**.
Os principais objetivos foram:

- ✅ Normalizar os dados incompatíveis com o **json-server**
- ✅ Configurar o **Express.js** para servir páginas renderizadas com **EJS**
- ✅ Integrar **json-server** e consumir os dados via **Axios** no backend
- ✅ Implementar **paginação client-side** para otimizar a renderização

## 🐂 Resultados

## Os ficheiros resultantes deste TPC são os seguintes:

- [Normalizador](./dataset/normalizer.py)
- [Servidor ExpressJS](./server.js)
- [Templates EJS](./views/)
- [Ficheiros Estáticos (CSS, JS)](./public/)

## 📌 Notas Adicionais

- A estrutura de pastas seguiu a convenção de **Express + EJS**, onde os ficheiros EJS estão na pasta `views` e os assets estão em `public/`.
- O json-server foi utilizado para simular uma API REST, permitindo requisições dinâmicas para `reparacoes`, `viaturas` e `intervencoes`.
- A paginação foi feita no **lado do cliente**, garantindo uma experiência fluida sem recarregar a página.

---

> Universidade do Minho - 2025
