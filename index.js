
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
require("dotenv").config()
const cors = require("cors")
const formRouter = require("./routes/formRoutes")

app.use(express.json())

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

app.use(cors({
    origin: "https://admirable-beignet-3a2fa1.netlify.app",
    credentials: true
}));

app.use("/api", formRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    connection()
    console.log("Port is running on 7000");
})