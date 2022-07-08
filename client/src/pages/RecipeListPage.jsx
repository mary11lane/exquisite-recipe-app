import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../styles/RecipeListPage.module.css';
import RecipeTile from '../components/RecipeTile.jsx';
import Footer from '../components/Footer';

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');
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
    setQuery(input);
  };

  return (
    <main className={styles.container}>
      <form onSubmit={getSearch} className={styles.form}>
        <input
          className={styles.inputForm}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.buttonSearch} type="submit">
          Search
        </button>
      </form>
      <section className={styles.recipeTiles}>
        {recipes.map((item) => {
          return <RecipeTile item={item} />;
          console.log(item);
        })}
      </section>
      <Footer />
    </main>
  );
};

export default RecipeListPage;
