const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    console.log(file);
    cd(null, "files/");
  },
});

module.exports = multer({
  storage: storage,
  limits: {
    fieldSize: 100 * 1024 * 1024,
  },
});
