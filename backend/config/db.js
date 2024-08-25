import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATBASE_URI);
        console.log(`Successfully connected to db`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit(1)
    }
}
export default connectDB;