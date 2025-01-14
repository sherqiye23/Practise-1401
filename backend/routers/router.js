const controllers = require("../controllers/controllers");
const express = require("express")
let routers = express.Router()

routers.get("/", controllers.getData)
routers.get("/:id", controllers.gedById)
routers.post("/", controllers.addData)
routers.delete("/:id", controllers.deleteData)
routers.put("/:id", controllers.updateData)

module.exports = routers
