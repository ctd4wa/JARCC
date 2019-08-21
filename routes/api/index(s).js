const router = require("express").Router();
const schoolRoutes = require("./school");

// user routes
router.use("/school", schoolRoutes);

module.exports = router;