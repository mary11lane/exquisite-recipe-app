import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/RecipeListPage.module.css';
import RecipeTile from '../components/RecipeTile.jsx';

const RecipeListPage = () => {
  const uniqueId = uuidv4();
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

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <main className={styles.container}>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <section className={styles.recipeTiles}>
        {recipes.map((item) => {
          return <RecipeTile item={item} />;

          // <Link to={`recipe/${encodeURIComponent(item.recipe.uri)}`}>
          //   <div key={uniqueId} className={styles.tileRecipe}>
          //     <img src={item.recipe.image}></img>
          //     <div>label: {item.recipe.label}</div>
          //     <div className={styles.healthLabels}>
          //       health labels: {item.recipe.healthLabels.join(', ')}
          //     </div>

          //     <div>C02e: {item.recipe.co2EmissionsClass}</div>
          //   </div>
          // </Link>
          console.log(item);
        })}
      </section>
      {/* <div>pagination: {responseVar.href}</div> */}
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
