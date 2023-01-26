const { Schema, model } = require("mongoose");

const File = new Schema({
  filename: { type: String, required: true },
  size: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = model("File", File);
