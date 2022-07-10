import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../styles/RecipeListPage.module.css';
import RecipeTile from '../components/RecipeTile.jsx';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer.jsx';

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('chicken');
  const [dataFetched, setDataFetched] = useState(false);
  const [page, setPage] = useState({});

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/${query}`);
    setRecipes(data.hits);
    setDataFetched(true);
    setPage(data._links.next);
    console.log('recipes', recipes);
    console.log('data', data);
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
    console.log('onchange', input);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(input);
    console.log('input', input);
  };

  const nextPage = async () => {
    const { data } = await axios.get(page.href);
    setRecipes(data.hits);
    setPage(data._links.next);
    setDataFetched(true);
  };

  return (
    <main className={styles.container}>
      <NavBar />
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          className={styles.inputForm}
          type="text"
          value={input}
          onChange={changeHandler}
        />
        <button className={styles.buttonSearch} type="submit">
          Search
        </button>
      </form>
      {!dataFetched ? (
        <div className={styles.textLoader}>
          Hungry yet? Your recipe list is on its way!
        </div>
      ) : (
        <section className={styles.recipeTiles}>
          {recipes.map((item) => {
            return <RecipeTile item={item} />;
          })}
        </section>
      )}
      <section className={styles.pagination}>
        <div className={styles.next} onClick={nextPage}>
          Next
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default RecipeListPage;
