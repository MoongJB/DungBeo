import express from "express";
let app = express();

let data = [
  { name: "Khanh Minh Bui", age: "20" },
  { name: "Tran Luu Dung", age: "20" },
  

app.get("/api", (req, res) => {
  return res.status(200).json({
    message: data,
  });
});

app.listen(4953, () => {
  console.log("Server started");
});
