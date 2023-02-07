const express = require("express");
const app = express();
const port = 3000;
const data = process.env.data || "World!";

app.get("/", (req, res) => {
    console.log(`Hello ya ${data}! on develop`)
    res.send(`Hello ${data}! on develop`);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
