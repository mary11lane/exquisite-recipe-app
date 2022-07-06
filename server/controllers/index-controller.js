import axios from 'axios';
import 'dotenv/config';

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

export const getItems = async (req, res) => {
  const { query } = req.params;
  try {
    const apiRes = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = apiRes.data;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const API_KEY = process.env.API_KEY;

// router.get('/:location', async (req, res) => {
//   const { location } = req.params;
//   try {
//     const apiRes = await needle(
//       'get',
//       `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
//     );
//     const data = apiRes.body;
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
