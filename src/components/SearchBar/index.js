import React, {useState} from "react";
import styles from "./SearchBar.module.css";
import { cards } from "../../components/data/cards";


const SearchBar = () => {

    const [filter, setFilter] = useState('');
    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    console.warn(filter)
    return (
        <section>
            <div>
                <label />
                <input 
                type="text"
                value={filter}

                
                />
            </div>
        </section>

    )

};

export default SearchBar;