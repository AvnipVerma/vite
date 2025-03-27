const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); 

const images = [
  { id: 1, url: "https://picsum.photos/200/300" },
  
  { id: 2, url: "https://dummyimage.com/200x300/000/fff" }
];

app.get("/random-image", (req, res) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  res.json(randomImage);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
