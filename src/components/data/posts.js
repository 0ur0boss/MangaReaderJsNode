
import image1 from '../../img/whiteblood.jpg'
import image2 from '../../img/sololeveling.jpg'
import image3 from '../../img/lecteuromniscient.jpg'

// pour mémoriser mes favoris
// solution 1: déclarer 1 boolean / publication pour chaque utilisateur 
//             PROBLEME : je déclare autant de boolean que de publication (ex: j'ai 3 000 000 de publi j'ai 3 000 000 )
// solution 2 : déclarer une liste de favoris (qui s'agrandie a chaque fois que j'aime un new truc)
export const imageSlider = [
    {
        id : 1,
        title : "WhiteBlood",
        text : "Park Hayan est un vampire de sang pur avec un coeur doux...",
        imageUrl : image1,
     
    },

    {
        id : 2,
        title : "Solo Leveling",
        text : " Sung Jin-Woo est le plus faible des chasseurs...",
        imageUrl : image2,
    },

    {
        id : 3,
        title : "Lecteur Omniscient",
        text : "Je suis le seul lecteur à connaître la fin du monde...",
        imageUrl : image3,
    }

]
