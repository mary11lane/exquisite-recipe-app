import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import styles from '../styles/RecipePage.module.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const idUri = encodeURIComponent(id);
    console.log('single uri', idUri);
    console.log('idparams', id);
    const response = await axios.get(
      `http://localhost:5000/recipes/recipe/${id}`
    );
    setRecipe(response.data.recipe);
    setDataFetched(true);
    console.log(response.data);
  };
  return (
    <main>
      <NavBar />
      <section className={styles.container}>
        {!dataFetched ? (
          <div className={styles.textLoader}>Fetching your recipe...</div>
        ) : (
          <div className={styles.containerSub}>
            <img src={recipe.image} className={styles.image}></img>
            <section className={styles.containerRecipe}>
              <div className={styles.label}>{recipe.label}</div>

              <section className={styles.containerDetails}>
                <div>ingredients: {recipe.ingredientLines}</div>
                <div>health labels: {recipe.healthLabels}</div>
                <div>c02e: {recipe.co2EmissionsClass}</div>
              </section>
            </section>
          </div>
        )}
        <Footer />
      </section>
    </main>
  );
};

export default RecipePage;
