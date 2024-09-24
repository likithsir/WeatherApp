const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // To load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`);
    const weather = response.data.current;
    res.json({
      temp: weather.temp_c,
      condition: weather.condition.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

