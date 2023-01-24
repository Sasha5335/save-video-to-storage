const Router = require("express");
const fileController = require("../controllers/fileController");
const File = require("../models/File");
const router = new Router();

router.post("/upload", fileController.createDir);

module.exports = router;
