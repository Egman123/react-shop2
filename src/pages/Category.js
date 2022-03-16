import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import {getFilteredByCategory} from '../api';

import MealList from '../components/MealList';

function Category() {

    const {name} = useParams();
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        getFilteredByCategory(name).then(data=>{
            setMeals(data.meals);
        });
    }, []);



    return (
        <div>
            <button onClick={()=>navigate(-1)}>GO BACK</button>
           <MealList meals={meals} />
        </div>
    )
}

export default Category
