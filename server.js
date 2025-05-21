const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = './data.json';

// Load data
function loadData() {
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

// Save data
function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Get categories
app.get('/category', (req, res) => {
  const data = loadData();
  const categories = {};
  Object.keys(data).forEach(key => {
    categories[key] = key;
  });
  res.json(categories);
});

// List all albums
app.get('/album-list', (req, res) => {
  const data = loadData();
  const list = Object.keys(data).map(key => ({
    category: key,
    total_videos: data[key].length,
    video_numbers: data[key].map((v, i) => i + 1)
  }));
  res.json(list);
});

// Get random video from a category
app.get('/album', (req, res) => {
  const { category } = req.query;
  const data = loadData();

  if (!category || !data[category]) {
    return res.status(400).json({ error: "Invalid or missing category" });
  }

  const videos = data[category];
  if (videos.length === 0) return res.json({ message: "No videos in this category." });

  const randomIndex = Math.floor(Math.random() * videos.length);
  const selected = videos[randomIndex];

  res.json({
    category,
    number: randomIndex + 1,
    url: selected.url
  });
});

// Add video to a category
app.get('/album-add', (req, res) => {
  const { url, category } = req.query;
  if (!url || !category) return res.status(400).send("Missing url or category");

  const data = loadData();

  if (!data[category]) return res.status(400).send("Invalid category");

  data[category].push({
    url,
    number: data[category].length + 1
  });

  saveData(data);
  res.send(`Added to category ${category}. Total now: ${data[category].length}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Album API running on port ${PORT}`);
});
