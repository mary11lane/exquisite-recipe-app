import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/RecipeTile.module.css';

const RecipeTile = ({ item }) => {
  const uniqueId = uuidv4();
  return (
    <main key={uniqueId} className={styles.tileRecipe}>
      <Link to={`recipe/${encodeURIComponent(item.recipe.uri)}`}>
        <img src={item.recipe.image}></img>
        <div>label: {item.recipe.label}</div>
        {/* <div className={styles.healthLabels}>
          health labels: {item.recipe.healthLabels.join(', ')}
        </div>
        <div>C02e: {item.recipe.co2EmissionsClass}</div> */}
      </Link>
    </main>
  );
};

export default RecipeTile;
