const express = require("express")
const { default: mongoose } = require("mongoose")
const Form = require("../model/formModel")
const router = express.Router()


router.post("/create", async (req, res) => {
    try {
        console.log(req.body)
        const formCreate = await Form.create(req.body)
        console.log(formCreate)
        res.status(200).json({ msg: "form creared successfully" })
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong" })
    }
})

router.get("/formdata", async (req, res) => {
    try {
        const formData = await Form.find({})
        console.log(formData)
        res.status(200).json({formData })
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong" })
    }
})


module.exports = router