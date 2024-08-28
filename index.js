import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000
const DBURL = process.env.DB_URL

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Data base is connected successfully");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("users", userSchema);

app.get("/users", async(req, res)=>{
    const userData =await UserModel.find();
    console.log(userData)
    res.json(userData)
})
