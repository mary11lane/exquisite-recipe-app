import axios from 'axios';
import 'dotenv/config';

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

export const getRecipes = async (req, res) => {
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

export const getRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const apiResSingle = await axios.get(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&beta=true&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(apiResSingle);
    const dataSingle = apiResSingle.data;
    res.status(200).json(dataSingle);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
