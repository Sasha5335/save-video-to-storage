import { upload } from "./upload.js";

upload("#file", {
  multi: true,
  accept: [".mp4"],
  onUpload(files, blocks) {
    files.forEach((file, index) => {
      console.log(file);
    });
  },
});
