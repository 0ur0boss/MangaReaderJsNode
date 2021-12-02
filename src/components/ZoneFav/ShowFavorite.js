import Card from "../../components/Card";
import styles from "./ShowFavorite.module.css";
// import BtnFav from "../../components/BtnFav";

// showFavorite.provide('AppContext')
import AppContext from "../../contexts/AppContext";
import React, { useContext } from "react";
import clsx from "clsx";



const ShowFavorite = ({ handleFav }) => {
    const { mangas, favs, isFaved } = useContext(AppContext);
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

                        />
                    )

                })}
            </div>
        </div>

    );
}

export default ShowFavorite;
