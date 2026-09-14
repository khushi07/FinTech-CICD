const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("FinTech CI/CD Application is running!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Healthy",
        application: "FinTech-CICD"
    });
});

app.listen(port, () => {
    console.log(`FinTech application running on port ${port}`);
});