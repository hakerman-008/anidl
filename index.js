
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/kshitiz', async (req, res) => {
    const episode = req.query.episode;
    const apiUrl = `https://api2.anime-dex.workers.dev/download/${episode}`;

    try {
        const response = await axios.get(apiUrl);
        const downloadLinks = response.data.results;

        res.json({ downloadLinks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
