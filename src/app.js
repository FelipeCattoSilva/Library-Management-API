import express from 'express'
import connectDb from './config/dbConnect.js'
import routes from './routes/index.js'
import dotenv from "dotenv"

dotenv.config()

const dbConnection = await connectDb()
dbConnection.on("error", (err) => {
    console.error(`${`-` * 50}Mongo Error:\n${err}`)
})

const app = express()
routes(app)

export default app