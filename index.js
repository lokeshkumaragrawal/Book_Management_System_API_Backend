const express = require("express");
const dotenv = require("dotenv");
//for database connection
const Dbconnection = require("./databaseConnection");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

dotenv.config();
const app = express();

Dbconnection();

const PORT = 2002;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and Running",
    });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.get("*", (req, res) => {
    res.status(501).json({
        message: "This route does not exist",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
