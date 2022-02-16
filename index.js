const express = require("express");
const app = express();
const port = 3000;
const data = process.env.data || "World";

app.get("/", (req, res) => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    console.log("Visiting App at: ", time, process.env.data);
    res.send(`Hello ${data} _21!!!`);

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
