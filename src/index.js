import app from './app.js'
import dotenv from 'dotenv'
import { connectToDb } from './db/db.config.js'

dotenv.config()
const PORT = process.env.PORT || 8080


app.get('/', (req, res) => {
    res.end('This is Project Management Api Project')
})

connectToDb(process.env.MONGO_URI).then (() => {
    app.listen(PORT,  () => {
        console.log(`Server is running on PORT: ${PORT}`);
    })
}).catch((err) => {
    console.error(`MongoDb connection Error: ${err}`);
})
