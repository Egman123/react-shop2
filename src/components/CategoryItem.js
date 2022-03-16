import {Link} from 'react-router-dom';



function CategoryItem({item}) {
  return (
    <div className='CategoryItem'>
        <div className='idCategory'>{item.idCategory}</div>
        <div className='strCategory'>{item.strCategory}</div>
        <img className='strCategoryThumb' src={item.strCategoryThumb} />
        <div className='strCategoryDescription'>{item.strCategoryDescription.length > 15 ? item.strCategoryDescription.substr(0, 5) + ' more...' : item.strCategoryDescription}</div>
        <Link className='btn' to={'/category/' + item.strCategory}>Watch {item.strCategory}</Link>
        <hr />
    </div>
  );
}

export default CategoryItem;
