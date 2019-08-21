const router = require("express").Router();
const schoolsController = require("../../controllers/schoolsController");

// Matches with "/api/schools"
router.route("/")
  .get(schoolsController.findAll)
  .post(schoolsController.create);

// Matches with "/api/schools/:email"
router
  .route("/:email")
  .get(schoolsController.findById)
  .put(schoolsController.update)
  .delete(schoolsController.remove);

module.exports = router;