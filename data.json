const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const fontData = {
  status: "success",
  fontList: [
    { id: "1", example: "𝒮𝒸𝓇𝒾𝓅𝓉 ℬℴ𝓁𝒹" },
    { id: "2", example: "𝗠𝗼𝗻𝗼𝘀𝗽𝗮𝗰𝗲 𝗕𝗼𝗹𝗱" },
    { id: "3", example: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜" },
    // 👉 Paste all 43 fonts here
    { id: "43", example: "𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝕭𝖔𝖑𝖉" }
  ],
  author: "rahuuu ♡︎"
};

app.get('/', (req, res) => {
  res.send('🆆🅴🅻🅲🅾🅼🅴 🆃🅾 🅵🅾🅽🆃 🅰🅿🅸');
});

app.get('/fonts', (req, res) => {
  res.json(fontData);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
