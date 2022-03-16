import {API_URL} from './config';


const getAllCategories = async ()=>{
    const response = await fetch(API_URL+ 'categories.php');
    return response.json();
}


const getFilteredByCategory = async (catName)=>{
    const response = await fetch(API_URL + 'filter.php?c='+catName);
    return response.json();
}



const getMealById = async (id)=>{
    const response = await fetch(API_URL + 'lookup.php?i='+id);
    return response.json();
}


export {getAllCategories, getFilteredByCategory, getMealById};