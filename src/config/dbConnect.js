import mongoose from "mongoose"

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            tls: true,
            tlsCAFile: "./src/config/certificate.pem",
            tlsCertificateKeyFile: './src/config/certificate.pem'
        })
        console.warn("- MongoDB connected Successfully")
    } catch (err) {
        console.log(err)
    }

    return mongoose.connection
}

export default connectDb