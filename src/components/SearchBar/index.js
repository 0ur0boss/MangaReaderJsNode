import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { cards } from "../../components/data/cards";
import Card from "../../components/Card";


const SearchBar = () => {

    const [filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = cards.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    return (
        <section>
            <div>
                <div>
                    <label />
                    <input
                        type="text"
                        value={filter}
                        onChange={searchText.bind(this)}
                    />
                </div>
                {/* On affiche les cards en function de la search bar (avec dataSearch) */}
                <div>
                    {dataSearch.map((card) => (
                        <Card card={card} />
                    ))}
                </div>
            </div>
        </section>

    )

};

export default SearchBar;