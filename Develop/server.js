const express = require("express");
let mongoose = require("mongoose");
const morgan = require("morgan")



const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);







app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });