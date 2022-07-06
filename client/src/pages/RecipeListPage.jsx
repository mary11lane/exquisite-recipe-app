import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Recipe from '../components/Recipe.jsx';

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [responseVar, setResponseVar] = useState({});

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/api/${query}`);
    setRecipes(response.data.hits);
    setResponseVar(response.data._links.next);
  };
  // console.log(recipes);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <main>
      test
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div>
        {recipes.map((item) => (
          <div key={item.recipe.uri}>
            <img src={item.recipe.image}></img>
            <div>label: {item.recipe.label}</div>
            <div>health labels: {item.recipe.healthLabels.join(', ')}</div>
            <div>ingredients: {item.recipe.ingredientLines}</div>
            <div>C02e: {item.recipe.co2EmissionsClass}</div>
          </div>
        ))}
      </div>
      <div>pagination: {responseVar.href}</div>
      {/* <div>pagination: {responseVar.title}</div> */}
      {/* {console.log({responseVar.href})} */}
      {/* <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div> */}
    </main>
  );
};

export default RecipeListPage;
