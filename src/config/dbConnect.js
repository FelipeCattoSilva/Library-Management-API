import mongoose from "mongoose"

async function connectDb() {
    const uri = process.env.MONGO_URI
    const tlsEnabled = process.env.MONGO_TLS === 'true'

    const options = {}
    if (tlsEnabled) {
        options.tls = true
        // Optional: allow overriding certificate paths via env vars
        if (process.env.MONGO_TLS_CA_FILE) {
            options.tlsCAFile = process.env.MONGO_TLS_CA_FILE
        } else {
            options.tlsCAFile = "./src/config/certificate.pem"
        }
        if (process.env.MONGO_TLS_CERT_KEY_FILE) {
            options.tlsCertificateKeyFile = process.env.MONGO_TLS_CERT_KEY_FILE
        }
    }

    try {
        await mongoose.connect(uri, options)
        console.warn("- MongoDB connected successfully")
    } catch (err) {
        console.error("MongoDB connection error:", err)
    }

    return mongoose.connection
}

export default connectDb