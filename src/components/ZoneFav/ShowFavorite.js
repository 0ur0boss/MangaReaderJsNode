import Card from "../../components/Card";
import styles from "./ShowFavorite.module.css";

import AppContext from "../../contexts/AppContext";
import React, { useContext } from "react";


const ShowFavorite = ({ handleFav }) => {
    const { mangas, favs } = useContext(AppContext);
    console.log(favs.length);


    return (
        <div>
            
            <div className={styles.wrapperShowFavorite}>

                {favs.map((fav) => {
                    const manga = mangas.find((manga) => manga.id === fav);
                    return (
                        <Card
                            key={manga.id}
                            manga={manga}
                            favs={favs}
                            handleFav={handleFav}
                            hideDescription
                        />
                    )

                })}
            </div>
        </div>

    );
}

export default ShowFavorite;

