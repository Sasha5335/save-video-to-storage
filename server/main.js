const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const fileRouter = require("./routes/file.routes")

const app = express()
const PORT = config.get('serverPort')

app.use(express.json())
app.use("/file", fileRouter)

const start = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {

    }
}

start()