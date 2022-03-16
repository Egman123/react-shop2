import { useState } from "react";


const Search2 = ({searchHandler2})=>{

    const [search, setSearch] = useState('');

    const searchHandler = (searchBy)=>{
        searchHandler2(searchBy, search);
    }

    return (
        <div className="Search2">
            <input type="text" placeholder="Search Here ..." value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={()=>searchHandler('strCategory')}>Search By Category</button>
            <button onClick={()=>searchHandler('strCategoryDescription')}>Search By Description</button>
        </div>
    );
}

export default Search2;