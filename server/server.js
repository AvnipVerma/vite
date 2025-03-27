const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/get-image", (req, res) => {
    const { id, url } = req.query; 

    if (!id || !url) {
        return res.status(400).json({ error: "Missing id or url" });
    }

    res.json({ id, url }); // Send back the same JSON response
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
