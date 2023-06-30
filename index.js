const express = require("express");
const port = 6600;
const app = express();
const expressLayouts = require("express-ejs-layouts");
const router = require("./routes");

app.use(expressLayouts);
app.use(express.urlencoded());
app.use("/", require("./routes"));
app.use(express.static("./asstes"));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error during connected to the port ${port}`);
  } else {
    console.log(`Successfuly connected to the port ${port}`);
  }
});
