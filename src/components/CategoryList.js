import CategoryItem from './CategoryItem';

function CategoryList( { category=[] } ) {

  return (
    <div className='CategoryList'>
        {
          category.map(el=>{
            return < CategoryItem key={el.idCategory} item={el} />
          })
        }
    </div>
  );
}

export default CategoryList;
