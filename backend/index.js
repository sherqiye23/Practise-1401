const express = require("express")
const app = express()
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const routers = require("./routers/router")
require("./config/config")

dotenv.config()
app.use(bodyParser.json())
app.use(cors())

app.use("/coloshop", routers)
app.listen(process.env.Port, () => console.log("listen to port 3000"))


