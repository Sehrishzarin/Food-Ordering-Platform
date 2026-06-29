import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routers/myUserRoute";
mongoose.connect(process.env.MONGODB_URI as string).then(()=> console.log("Connected to database"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute)

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});