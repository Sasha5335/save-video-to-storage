const fs = require("fs");
const config = require("config");

class FileService {
  createDir(file) {
    const filePath = `${config.get("filePath")}\\${file.path}`;
    return new Promise((resolve, reject) => {
      try {
        fs.mkdirSync(filePath);
        return resolve({ message: "File was created" });
      } catch (e) {
        console.log(e);
        return reject({ message: "File error" });
      }
    });
  }
}

module.exports = new FileService();
