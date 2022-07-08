import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const idUri = encodeURIComponent(id);
    console.log('single uri', idUri);
    console.log('idparams', id);
    const response = await axios.get(
      `http://localhost:5000/api/single/${idUri}`
      //`https://api.edamam.com/api/recipes/v2/${idUri}?type=public&beta=true&app_id=5185c6f2&app_key=431eb98528387457047665d1164e5527&field=uri&field=label&field=image&field=healthLabels&field=ingredientLines&field=co2EmissionsClass`
      // 'https://api.edamam.com/api/recipes/v2/http%253A%252F%252Fwww.edamam.com%252Fontologies%252Fedamam.owl%2523recipe_b79327d05b8e5b838ad6cfd9576b30b6?type=public&beta=true&app_id=5185c6f2&app_key=431eb98528387457047665d1164e5527&field=uri&field=label&field=image&field=healthLabels&field=ingredientLines&field=co2EmissionsClass'
    );
    setRecipe(response.data.recipe);
    console.log(response.data.recipe);
  };
  return (
    <main>
      <div>RecipePage</div>
      <img src={recipe.image}></img>
      <div>label: {recipe.label}</div>
      <div>ingredients:{recipe.ingredientLines}</div>
      <div>health labels:{recipe.healthLabels}</div>
      <div>c02e: {recipe.co2EmissionsClass}</div>
    </main>
  );
};

export default RecipePage;
