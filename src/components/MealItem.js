import React from 'react';
import {Link} from 'react-router-dom';

function MealItem( props ) {
    const {strMeal, strMealThumb, idMeal} = props;

  return (
      <div className='MealItem'>
          <div className='idMeal'>{idMeal}</div>
          <div className='strMeal'>{strMeal}</div>
          <img className='strMealThumb' src={strMealThumb} />
          <Link to={'/recipe/' + idMeal}>Watch Recipe </Link>
          <hr />
      </div>
  );
}

export default MealItem;
