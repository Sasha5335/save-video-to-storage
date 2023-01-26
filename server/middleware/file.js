const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    console.log(file);
    cd(null, "files/");
  },
  filename: (req, file, cd) => {
    cd(null, new Date().toISOString() + "-" + file.name);
  },
});

module.exports = multer({
  storage: storage,
  limits: {
    fieldSize: 8 * 1024 * 1024,
  },
});
