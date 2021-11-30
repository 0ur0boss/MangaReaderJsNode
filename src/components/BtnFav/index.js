import React from 'react' 
import { useState } from 'react';
import { cards } from "../../components/data/cards.js";


const BtnFav = () => {

    let [favoris, setFavoris] = useState([]);

    const addToFavorite = id => {
      console.log('check addtofavorite');
      const data = cards.find(item => item.id === id);
      setFavoris([...favoris, data]);
    };
    
    const deleteFromFavorite = id => {
      console.log('check deletefromfavorite');
      const erase = favoris.filter(item => item.id !== id);
      setFavoris(erase);
    };
  
    return (
      <button onClick={favoris ? deleteFromFavorite : addToFavorite} type="button">{favoris ? "Enlever des favoris" : "Ajouter aux favoris"}</button>
    )
}

export default BtnFav


  // const addFavoris = id => {
  //   this.setState(
  //     {
  //       addToFav: !this.addToFav
  //     },
  //     () => console.log(this.addToFav)
  //   );

  // }




    // setFavoris(!favoris);
    // localStorage.setItem("favoris", true);

// render() {
//   let list = data.map((obj) => {
//      return <div key={obj.id} id={obj.id} onClick={() => this.handleClick(obj.id)}></div>         
//   }
//   return <div>{list}</div>;
// }

// handleClick(id){
//  console.log(id);
// }