require("dotenv").config()
import { app } from "./app";
import connectDB from "./db/db"

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running!!!");
    });
  })
  .catch((err) => {
    console.log(`MONGODB connection Fails!!!`, err);
  });
