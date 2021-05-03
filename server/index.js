const express = require("express");
const cors = require("cors");

const app = express();

//! MIDDLEWARE
app.use(express.json());
app.use(express.json({ limit: "30mb" }));
app.use(cors());

module.exports = app;
