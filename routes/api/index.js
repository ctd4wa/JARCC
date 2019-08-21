const router = require("express").Router();
const userRoutes = require("./users");

const schoolRoutes = require("./schools");

// user routes
router.use("/users", userRoutes);
router.use("/schools", schoolRoutes);
module.exports = router;