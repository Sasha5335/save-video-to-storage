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

export function output(selector, options = {}) {
  let files = [];
  const output = document.querySelector(selector);
  console.log(output);
  const getVideo = element(
    "button",
    ["btn", "primary"],
    "Загрузить список видео"
  );

  output.insertAdjacentElement("afterend", getVideo);

  const triggerInput = () => input.click();

  outputVideo.addEventListener("click", triggerInput);
}
