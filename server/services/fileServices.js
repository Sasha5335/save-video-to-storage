const fs = require("fs");
const config = require("config");

class FileService {
  createDir(file, video) {
    const filePath = `${config.get("filePath")}\\${file.path}`;
    const filename = file.filename.split(".");
    const buffer = Buffer.from(video.split(",")[1], "base64");

    return new Promise((resolve, reject) => {
      try {
        let i = 1;

        fs.mkdirSync(filePath);
        const writeStream = fs.createWriteStream(
          `${filePath}/${filename[0]}.mp4`
        );

        writeStream.write(buffer, (err) => {
          err ? console.log(err.message) : console.log("File was created");
        });

        const readStream = fs.createReadStream(
          `${filePath}/${filename[0]}.mp4`
        );

        readStream.on("data", (chunk) => {
          console.log("------------START----------");
          console.log(chunk);
          fs.createWriteStream(`${filePath}/${filename[0]}_${i}`).write(chunk);
          console.log("----------END------------");
          i++;
          console.log(i);
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
