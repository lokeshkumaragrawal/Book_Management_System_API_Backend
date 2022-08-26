const express = require("express");

const app = express();

const PORT = 2002;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and Running",
    });
});
app.get("*", (req, res) => {
    res.status(501).json({
        message: "This route does not exist",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});