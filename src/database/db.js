import mongoose from "mongoose";

const DBConnect = async () => {
    try {
        const response = await mongoose.connect("mongodb://127.0.0.1:27017/Demodb");
        console.log("✅ DB Connected Successfully!");
    } catch (error) {
        console.log("❌ DB Connection Failed:", error.message);
    }
};

export default DBConnect;
