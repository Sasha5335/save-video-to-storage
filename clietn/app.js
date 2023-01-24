import { upload } from "./upload.js";

const hostUrl = "http://localhost:5000/file/upload";

upload("#file", {
  multi: true,
  accept: [".mp4"],
  onUpload(files, blocks) {
    files.forEach(async (file, index) => {
      const { name, size, type } = file;
      console.log(name, size, type, "222");

      const formData = new FormData();
      formData.append("file", file);
      console.log(formData, "5555");

      const res = await fetch(hostUrl, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data, "6666");
      // fetch(hostUrl, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, size, type }),
      // }).then((response) => console.log(response));
    });
  },
});
