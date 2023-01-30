import axios from "axios";
import { upload } from "./upload.js";
import { output } from "./output";

const uploadHostUrl = "http://localhost:5000/file/upload";

upload("#file", {
  multi: true,
  accept: [".mp4"],
  onUpload(files) {
    files.forEach((file) => {
      const { name, size, type } = file;
      const reader = new FileReader();

      reader.onload = async (ev) => {
        const src = ev.target.result;

        const formData = new FormData();
        formData.append("filename", name);
        formData.append("size", size);
        formData.append("type", type);
        formData.append("video", src);
        console.log(formData);
        await axios.post(uploadHostUrl, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      };
      reader.readAsDataURL(file);
    });
  },
});

output("#output");
