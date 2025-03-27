const express = require("express");
const cors = require("cors");

const app = express();
// app.use(cors());

const corsOptions = {
    origin: [
      '*',
    ],
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    credentials: true,
  };
  app.use(cors(corsOptions));


app.get("/get-image", (req, res) => {
    const { id, url } = req.query; 

    if (!id || !url) {
        return res.status(400).json({ error: "Missing id or url" });
    }

    res.json({ id, url }); // Send back the same JSON response
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//c
