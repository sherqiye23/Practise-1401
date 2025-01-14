const myModel = require("../models/model")

const controllers = {
    getData: async (req, res) => {
        let alldata = await myModel.find()
        res.send(alldata)
    },
    gedById: async (req, res) => {
        let {id} = req.params
        let data = await myModel.findById(id)
        res.send(data)
    },
    deleteData: async (req, res) => {
        let {id} = req.params
        await myModel.findByIdAndDelete(id)
        res.send({
            message: "Success Delete"
        })
    },
    addData: async (req, res) => {
        await myModel(req.body).save()
        res.send({
            message: "Success Post",
            data: req.body
        })
    },
    updateData: async (req, res) => {
        let {id} = req.params
        let updatedata = req.body
        let uptadeddata = await myModel.findByIdAndUpdate(id, updatedata, {new:true})
        res.send(uptadeddata)
    },
}

module.exports = controllers
