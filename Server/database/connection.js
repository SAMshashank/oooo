const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Local MongoDB connection string
    const localURI = 'mongodb+srv://shashankkushwaha123:123Abc@cluster0.cxggrrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace 'mydatabase' with your database name
    const con = await mongoose.connect(localURI);
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
