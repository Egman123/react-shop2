import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import {getMealById} from '../api';

function Recipe() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({});

    useEffect(()=>{
        getMealById(id).then(data=>{
            setRecipe(data.meals[0]);
        })
    }, []);


    return (
        <div className='Recipe'>
            <button onClick={()=>navigate(-1)}>GO BACK</button>
            <div className='idMeal'>{recipe.idMeal}</div>
            <div className='strMeal'>{recipe.strMeal}</div>
            <div className='strDrinkAlternate'>{recipe.strDrinkAlternate}</div>
            <div className='strCategory'>{recipe.strCategory}</div>
            <div className='strArea'>{recipe.strArea}</div>
            <img className='strMealThumb' src={recipe.strMealThumb} />
        </div>
      )
}

export default Recipe



