const fileService = require("../services/fileServices");
const File = require("../models/File");

class FileController {
  async createDir(req, res) {
    try {
      const { filename, size } = req.body;
      const file = new File({ filename, size });
      file.path = file.id;

      await fileService.createDir(file);
      await file.save();
      return res.json(file);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async getFiles(req, res) {
    try {
      const files = await File.find({
        user: req.user.id,
        parent: req.query.parent,
      });
      return res.json({ files });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Can not get files" });
    }
  }
}

module.exports = new FileController();
