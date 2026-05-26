import mongoose from "mongoose"


export const connectToDb = async (url) => {
    try {
        await mongoose.connect(url).then( () => {
            console.log(`Successfully connected to DB`)
        })
        
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}