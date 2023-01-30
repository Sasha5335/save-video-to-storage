const fs = require("fs");
const config = require("config");

class FileService {
  createDir(file, video) {
    const filePath = `${config.get("filePath")}\\${file.path}`;
    const filename = file.filename.split(".");

    return new Promise((resolve, reject) => {
      try {
        let i = 1;

        fs.mkdirSync(filePath);
        const writeStream = fs.createWriteStream(
          `${filePath}/${filename[0]}.txt`
        );

        writeStream.write(video, (err) => {
          err ? console.log(err.message) : console.log("File was created");
        });

        // const readStream = fs.createReadStream(
        //   `${filePath}/${filename[0]}.txt`
        // );

        // readStream.on("data", (chunk) => {
        //   console.log("------------START----------");
        //   console.log(chunk);
        //   fs.createWriteStream(`${filePath}/${filename[0]}${i}`).write(chunk);
        //   console.log("----------END------------");
        //   i++;
        //   console.log(i);
        // });

        return resolve({ message: "File was created" });
      } catch (e) {
        console.log(e);
        return reject({ message: "File error" });
      }
    });
  }
}

module.exports = new FileService();
