const express = require("express");

const app = express();

app.get("/blalalbl", (req, res) => {
  res.send({ data: "they talk a lot but nothing is said" });
});

app.get("/", (req, res) => {
  res.send({ data: "he is still talking" });
});

app.get("/beers/:beerType/:amount", (req, res) => {
  console.log(req.params);
  res.send({
    data: `Its friday lets go for ${req.params.amount} ${req.params.beerType}`,
  });
});

app.get("/bars/forgottenItems", (req, res) => {
  res.send({ data: req.query });
});

app.listen(3000);
