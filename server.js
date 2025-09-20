import app from './src/app.js'

const URL = "http://localhost:"
const PORT = 3000

app.listen(PORT, () => {
    console.log(`- Server listening to ${URL}${PORT}`)
})