const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/js", express.static(path.join(__dirname, "node_modules/axios/dist")));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
