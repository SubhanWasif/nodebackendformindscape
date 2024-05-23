const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/api/data", async (req, res) => {
  const prompt = req.body.prompt;
  console.log("Prompt:", prompt);

  try {
    console.log("Fetching data...");
    // Replace 'http://external-http-api.com/data' with the actual API endpoint
    const response = await axios.post("http://161.35.232.34:3000/predict", {
      prompt: prompt,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
