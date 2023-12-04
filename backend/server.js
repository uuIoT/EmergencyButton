const express = require("express");
const buttobRoutes = require("./routes//buttonRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.use("/api/button", buttobRoutes);

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});