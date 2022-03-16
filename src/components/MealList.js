import MealItem from './MealItem';

function MealList({meals}) {

    const elements = meals.map(el=>{
        return <MealItem key={el.idMeal} {...el} />
    });

  return <div className='MealList'>{elements}</div>;
}

export default MealList;

