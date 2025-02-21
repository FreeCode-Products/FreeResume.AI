const express = require("express");
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
    res.send("Hello, Express.js Server is Running! 🚀");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//sdoovjbsclvsojvbswivsdlkvnasidbvbodn