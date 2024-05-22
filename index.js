const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.get("/api/data", async (req, res) => {
  try {
    // Replace 'http://external-http-api.com/data' with the actual API endpoint
    const response = await axios.get("http://161.35.232.34:3000/predict");
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
