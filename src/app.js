import express from "express";

const app = express();

app.use(express.urlencoded())

app.use(express.json())

app.use(express.static("public/"))

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});

app.get("/login", (req, res) => {
    res.send("Enter your email & password to do login!");
});

app.get("/purchase", (req, res) => {
    res.send("Purchase Page!");
});

export default app;
