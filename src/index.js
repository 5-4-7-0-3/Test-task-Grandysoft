import express from "express";

const PORT = process.env.PORT || 8000;
const app = require("express")();
const server = require("http").createServer(app);

app.use(express.json());

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
