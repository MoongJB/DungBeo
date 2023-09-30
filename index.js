import express from "express";
let app = express();

const port = process.env.PORT || 9001;

let data = [
  { name: "Khanh Minh Bui", age: "20" },
  { name: "Tran Luu Dung", age: "20" },
];

app.get("/api", (req, res) => {
  return res.status(200).json({
    message: data,
  });
});

app.listen(port, () => {
  console.log("Server started");
});
