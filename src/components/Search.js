import { useState } from "react";


const Search = ({searchHandler})=>{

    const onChangeHandler = (value)=>{
        searchHandler(value);
    }


    return (
        <div className="Search">
            <input type="text" placeholder="Search Here ..." onChange={e => onChangeHandler(e.target.value)} />
        </div>
    );
}

export default Search;