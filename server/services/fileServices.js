const fs = require("fs");
const config = require("config");

class FileService {
  createDir(file, video) {
    const filePath = `${config.get("filePath")}\\${file.path}`;
    const filename = file.filename.split(".");

    return new Promise((resolve, reject) => {
      try {
        fs.mkdirSync(filePath);
        const writeStream = fs.createWriteStream(
          `${filePath}/${filename[0]}.txt`
        );
        writeStream.write(video, (err) => {
          err ? console.log(err.message) : console.log("File was created");
        });
        return resolve({ message: "File was created" });
      } catch (e) {
        console.log(e);
        return reject({ message: "File error" });
      }
    });
  }
}

module.exports = new FileService();
