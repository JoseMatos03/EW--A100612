const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const JSON_SERVER_URL = "http://localhost:5000";

app.get("/reparacoes", async (req, res) => {
    try {
        const response = await axios.get(`${JSON_SERVER_URL}/reparacoes?_sort=nome&_order=asc`);
        res.render("reparacoes", { reparacoes: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'reparacoes' from the database");
    }
});

app.get("/intervencoes", async (req, res) => {
    try {
        const response = await axios.get(`${JSON_SERVER_URL}/intervencoes?_sort=codigo&_order=asc`);
        res.render("intervencoes", { intervencoes: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'intervencoes' from the database");
    }
});

app.get("/veiculos", async (req, res) => {
    try {
        const response = await axios.get(`${JSON_SERVER_URL}/viaturas?_sort=marca&_order=asc`);
        res.render("veiculos", { veiculos: response.data });
    } catch (error) {
        res.status(500).send("Error fetching 'viaturas' from the database");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
