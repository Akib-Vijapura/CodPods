const mongoose = require("mongoose");

const connectDB =  () => {
  try {
    mongoose.set("strictQuery", true);

    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error :"));
    db.once("open", () => {
      console.log(`MongoDB connected to ${db.host}`);
    });
  } catch (error) {
    console.error(`MongoDB Error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
