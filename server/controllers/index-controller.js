import axios from 'axios';
import 'dotenv/config';

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

export const getItem = async (req, res) => {
  const { id } = req.params;

  try {
    const apiResSingle = await axios.get(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&beta=true&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // 'https://api.edamam.com/api/recipes/v2/http%253A%252F%252Fwww.edamam.com%252Fontologies%252Fedamam.owl%2523recipe_b79327d05b8e5b838ad6cfd9576b30b6?type=public&beta=true&app_id=5185c6f2&app_key=431eb98528387457047665d1164e5527&field=uri&field=label&field=image&field=healthLabels'
    // 'https://api.edamam.com/api/recipes/v2/http%253A%252F%252Fwww.edamam.com%252Fontologies%252Fedamam.owl%2523recipe_b79327d05b8e5b838ad6cfd9576b30b6?type=public&beta=true&app_id=5185c6f2&app_key=431eb98528387457047665d1164e5527&field=uri&field=label&field=image&field=healthLabels&field=ingredientLines&field=co2EmissionsClass'
    console.log(apiResSingle);
    const dataSingle = apiResSingle.data;
    res.status(200).json(dataSingle);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

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
