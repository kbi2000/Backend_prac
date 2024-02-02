const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/DbConnection");
const dotenv = require("dotenv").config();
connectDb();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(errorHandler);

app.use("/api/contacts",require("./routes/contact"))
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
