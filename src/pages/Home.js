import {useState, useEffect} from 'react'
import {getAllCategories} from '../api';

import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import Search2 from '../components/Search2';

function Home() {

    const [category, setCategory] = useState([]);
    const [sortFlag, setSortFlag] = useState(true);
    const [filteredCategory, setFilteredCategory] = useState([]);


    useEffect(()=>{
        getAllCategories().then((data)=>{
            setCategory(data.categories);
            console.log(data.categories);
        })
    }, []);


    // const sortByCategory = ()=>{
    //    category.sort((a, b)=>{
    //         if(sortFlag)  return b.idCategory - a.idCategory;
    //         else return a.idCategory - b.idCategory;
    //     });
    //     setCategory( [...category] );
    //     setSortFlag(!sortFlag);
    // }


     const sortByCategory = ()=>{
        category.sort((a, b) => {
            if(sortFlag){
                if (a.strCategory < b.strCategory) {
                    return -1;
                  }
                  if (a.strCategory > b.strCategory) {
                    return 1;
                  }
            }else{
                if (a.strCategory > b.strCategory) {
                    return -1;
                  }
                  if (a.strCategory < b.strCategory) {
                    return 1;
                  }
            }
         
            return 0;
          });
        console.log(category);
        setCategory( [...category] );
        setSortFlag(!sortFlag);
    }

    const searchHandler = (str)=>{
      setFilteredCategory(category.filter(el=> el.strCategory.toLowerCase().includes(str.toLowerCase()) ));
    }


    const searchHandler2 = (searchBy, search)=>{
        setFilteredCategory( category.filter(el => el[searchBy].toLowerCase().includes(search.toLowerCase()) ));
    
    }

    return (
        <div>
            Home 
            <button onClick={sortByCategory}>Sort By Category { sortFlag ? <i className="fas fa-sort-amount-up"></i> : <i className="fas fa-sort-amount-down-alt"></i>} </button>
            <Search searchHandler={searchHandler} />
            <Search2 searchHandler2={searchHandler2} />
            <CategoryList category={ filteredCategory.length>0 ? filteredCategory : category }  />
        </div>
    )
}

export default Home
