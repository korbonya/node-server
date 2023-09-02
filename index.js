import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.get("/users", (req, res) => {
  // do something in databae
  const users = [
    { id: 1, name: "alice" },
    { id: 2, name: "bek" },
    { id: 3, name: "chris" },
  ];
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const users = [
    { id: 1, name: "alice" },
    { id: 2, name: "bek" },
    { id: 3, name: "chris" },
  ];
  const user = users.filter((user) => user.id === parseInt(req.params.id));
  res.json(user);
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "alice" },
    { id: 2, name: "bek" },
    { id: 3, name: "chris" },
  ];
  res.json(products);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
