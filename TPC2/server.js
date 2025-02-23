const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const JSON_SERVER_URL = "http://localhost:5000";

app.get("/alunos", async (req, res) => {
    try {
        const response = await axios.get(`${JSON_SERVER_URL}/alunos`);
        res.render("alunos", { alunos: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'alunos' from the database");
    }
});

app.get("/cursos", async (req, res) => {
    try {
        const response = await axios.get(`${JSON_SERVER_URL}/cursos`);
        res.render("cursos", { cursos: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'cursos' from the database");
    }
});

app.get("/instrumentos", async (req, res) => {
    try {
        const response = await axios.get(`${JSON_SERVER_URL}/instrumentos`);
        res.render("instrumentos", { instrumentos: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'instrumentos' from the database");
    }
});

app.get("/alunos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${JSON_SERVER_URL}/alunos/${id}`);
        res.render("aluno", { aluno: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'aluno' from the database.");
    }
});

app.get("/cursos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${JSON_SERVER_URL}/cursos/${id}`);
        res.render("curso", { curso: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'curso' from the database.");
    }
});

app.get("/instrumentos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${JSON_SERVER_URL}/instrumentos/${id}`);
        res.render("instrumento", { instrumento: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'instrumento' from the database.");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
