const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log(`Successfully connected to the routers`);

router.get("/", homeController.homepage);
// router.use("/users", require("./users"));

module.exports = router;
