import axios from "axios";

const element = (tag, classes = [], content) => {
  const node = document.createElement(tag);

  if (classes.length) {
    node.classList.add(...classes);
  }

  if (content) {
    node.textContent = content;
  }

  return node;
};

export function output(selector) {
  const outputHostUrl = "http://localhost:5000/file";

  const output = document.querySelector(selector);
  const getVideo = element(
    "button",
    ["btn", "primary"],
    "Загрузить список видео"
  );
  const videoList = element("div", ["video-list"]);

  output.insertAdjacentElement("afterend", videoList);
  output.insertAdjacentElement("afterend", getVideo);

  const getVideoList = async () => {
    await axios.get(outputHostUrl).then((response) => {
      const { files } = response.data;
      files.forEach((file) => {
        console.log(file);
        videoList.insertAdjacentHTML(
          "afterbegin",
          `<div class="list">
            <a href=${file.filename}>${file.filename}</a>
          </div>`
        );
      });
    });
  };

  getVideo.addEventListener("click", getVideoList);
}
