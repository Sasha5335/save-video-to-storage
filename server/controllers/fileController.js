const fileService = require("../services/fileServices");
const File = require("../models/File");

class FileController {
  async createDir(req, res) {
    try {
      const { filename, size, type, video } = req.body;
      const file = new File({ filename, size, type });
      file.path = file.id;

      await fileService.createDir(file, video);
      console.log(file);
      await file.save();
      return res.json(file);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async getFiles(req, res) {
    try {
      const files = await File.find();
      return res.json({ files });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Can not get files" });
    }
  }
}

module.exports = new FileController();
