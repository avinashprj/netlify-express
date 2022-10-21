import express from "express";
import api from "./api";
const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log("server started on port " + port);
});
