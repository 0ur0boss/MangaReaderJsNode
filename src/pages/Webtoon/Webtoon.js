import React, { useContext, useState, useEffect } from 'react' 
// import BtnFav from "components/BtnFav";
import { useParams } from "react-router-dom";
import AppContext from "../../contexts/AppContext";


const Webtoon = () => {
  // je recupaire le l'iD dans l URL
  const { mangaId } = useParams();
  const { mangas } = useContext(AppContext);
  const [filteredManga, setFilteredManga] = useState();

  useEffect(() => {
    setFilteredManga(mangas.find(manga => manga.id === parseInt(mangaId)));
  }, [mangaId, mangas]);

  

  return (<div>
      <div>ID : {filteredManga?.id || 'no id'}</div>
      <div>Title : {filteredManga?.title || 'no title'}</div>
    </div>
   );

}

export default Webtoon


