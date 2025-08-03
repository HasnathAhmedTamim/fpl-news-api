// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const fplNews = [
  {
    id: 101,
    title: "Haaland Fit for Gameweek 1",
    date: "2025-08-03",
    summary:
      "Erling Haaland is confirmed fit and will start for Man City against Burnley.",
    team: "Manchester City",
    category: "Injury Update",
    image: "https://via.placeholder.com/300x200/87CEEB/000000?text=Haaland+Fit"
  },
  {
    id: 102,
    title: "Arsenal Signs New Striker",
    date: "2025-08-02",
    summary:
      "Chelsea has signed a new striker to boost their attacking options ahead of the new season.",
    team: "Chelsea",
    category: "Transfer",
    image: "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Chelsea+Transfer"
  },
  {
    id: 103,
    title: "Saka on Penalties Again?",
    date: "2025-08-02",
    summary:
      "Arteta confirms Bukayo Saka may take penalties again this season.",
    team: "Arsenal",
    category: "Tactical",
    image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Saka+Penalties"
  },
  {
    id: 104,
    title: "Manchester United Injury Woes Continue",
    date: "2025-08-01",
    summary:
      "Several key players are still out as United prepare for their season opener.",
    team: "Manchester United",
    category: "Injury Update",
    image: "https://via.placeholder.com/300x200/FF0000/000000?text=Man+Utd+Injuries"
  },
];

app.get("/", (req, res) => {
  res.send("🔴 FPL News API is running.");
});

app.get("/api/latest-news", (req, res) => {
  res.json(fplNews);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

// Export the Express API for Vercel
module.exports = app;
