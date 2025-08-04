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
    image:
      "https://i2-prod.football.london/incoming/article28079882.ece/ALTERNATES/s810/0_erling-haaland-man-city.jpg",
  },
  {
    id: 102,
    title: "Arsenal Signs New Striker",
    date: "2025-08-02",
    summary:
      "Arsenal has signed a new striker to boost their attacking options ahead of the new season.",
    team: "Arsenal",
    category: "Transfer",
    image:
      "https://e0.365dm.com/25/07/1600x900/skysports-premier-league-arsenal_6960983.jpg?20250709134021",
  },
  {
    id: 103,
    title: "Saka on Penalties Again?",
    date: "2025-08-02",
    summary:
      "Arteta confirms Bukayo Saka may take penalties again this season.",
    team: "Arsenal",
    category: "Tactical",
    image:
      "https://dims.apnews.com/dims4/default/7e5277f/2147483647/strip/true/crop/1784x1189+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe4%2Ff9%2Fdba7e8f5036296b2c952cfd39764%2Fa8a9fcf0d26246409103d993473fd3ef",
  },
  {
    id: 104,
    title: "Manchester United Injury Woes Continue",
    date: "2025-08-01",
    summary:
      "Several key players are still out as United prepare for their season opener.",
    team: "Manchester United",
    category: "Injury Update",
    image:
      "https://i2-prod.mirror.co.uk/incoming/article31035452.ece/ALTERNATES/s1200d/1_Manchester-United-v-Crystal-Palace-EFL-Carabao-Cup-Third-Round-Football-Old-Trafford-Manchester.jpg",
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
