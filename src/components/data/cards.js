import image1 from "../../img/whiteblood.jpg";
import image2 from "../../img/sololeveling.jpg";
import image3 from "../../img/lecteuromniscient.jpg";

// pour mémoriser mes favoris
// solution 1: déclarer 1 boolean / publication pour chaque utilisateur
//             PROBLEME : je déclare autant de boolean que de publication (ex: j'ai 3 000 000 de publi j'ai 3 000 000 )
// solution 2 : déclarer une liste de favoris (qui s'agrandie a chaque fois que j'aime un new truc)

export const cards = [
  {
    id: 1,
    title: "WhiteBlood",
    description: "Park Hayan est un vampire de sang pur avec un coeur doux...",
    img: image1,
    btn: "Acceder aux chapitres"
  },

  {
    id: 2,
    title: "Solo Leveling",
    description: " Sung Jin-Woo est le plus faible des chasseurs...",
    img: image2,
    btn: "Acceder aux chapitres"
  },

  {
    id: 3,
    title: "Lecteur Omniscient",
    description: "Je suis le seul lecteur à connaître la fin du monde...",
    img: image3,
    btn: "Acceder aux chapitres"
  }
];
