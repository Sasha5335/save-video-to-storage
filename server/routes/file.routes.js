const Router = require("express");
const fileController = require("../controllers/fileController");
const File = require("../models/File");
const router = new Router();
const fileMiddleware = require("../middleware/file");

router.get("/", fileController.getFiles);
router.post(
  "/upload",
  fileMiddleware.single("video"),
  fileController.createDir
);

module.exports = router;
