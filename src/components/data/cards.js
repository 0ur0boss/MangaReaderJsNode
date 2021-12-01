import image1 from "../../img/whiteblood.jpg";
import image2 from "../../img/sololeveling.jpg";
import image3 from "../../img/lecteuromniscient.jpg";
import image4 from "../../img/adorablementchien.jpg";
import image5 from "../../img/grandsducsdesenfers.jpg";
import image6 from "../../img/legarconaufusil.png";
import image7 from "../../img/prochainevie.jpg";
import image8 from "../../img/pyramidgame.jpg";
import image9 from "../../img/returntoplayer.jpg";
import image10 from "../../img/sweethome.jpg";


// pour mémoriser mes favoris
// solution 1: déclarer 1 boolean / publication pour chaque utilisateur
//             PROBLEME : je déclare autant de boolean que de publication (ex: j'ai 3 000 000 de publi j'ai 3 000 000 )
// solution 2 : déclarer une liste de favoris (qui s'agrandie a chaque fois que j'aime un new truc)

const cards = [
  {
    id: 1,
    title: "WhiteBlood",
    description: "Park Hayan est un vampire de sang pur avec un coeur doux...",
    author: "Lim Lina",
    tag: "Fantastique",
    img: image1,
    btn: "Acceder aux chapitres"
  },

  {
    id: 2,
    title: "Solo Leveling",
    description: " Sung Jin-Woo est le plus faible des chasseurs...",
    author: "je sais pas qui",
    tag: "Fantastique",
    img: image2,
    btn: "Acceder aux chapitres"
  },

  {
    id: 3,
    title: "Lecteur Omniscient",
    description: "Je suis le seul lecteur à connaître la fin du monde...",
    author: "Sleepy-C",
    tag: "Fantastique",
    img: image3,
    btn: "Acceder aux chapitres"
  },

  {
    id: 4,
    title: "Adorablement Chien",
    description: "Maudite, Haena devient un chien dès son premier baiser. Le seul...",
    author: "Lee Hey",
    tag: "Romance",
    img: image4,
    btn: "Acceder aux chapitres"
  },

  {
    id: 5,
    title: "Les conseils d'amour du grand duc des Enfers",
    description: "Quand la fille de vos rêves vous connaît à peine, que vos... ",
    author: "unfins",
    tag: "Comédie",
    img: image5,
    btn: "Acceder aux chapitres"
  },

  {
    id: 6,
    title: "Le Garçon au fusil",
    description: "Alors qu'il court pour sauver sa vie dans les bois, Kyu-Hwan, victime...",
    author: "Carnby Kim / Hongpil",
    tag: "Thriller",
    img: image6,
    btn: "Acceder aux chapitres"
  },

  {
    id: 7,
    title: "J'irai te voir dans ma prochaine vie",
    description: "Ji-Eum est une fille qui se rappelle de sa vie antèrieure, et c'est déjà...",
    author: "Lee Hey",
    tag: "Romance",
    img: image7,
    btn: "Acceder aux chapitres"
  },

  {
    id: 8,
    title: "Pyramid Game",
    description: "Tous les derniers jeudis du mois, un jeu d'élection cruel commence...",
    author: "Dalcognac",
    tag: "Drama",
    img: image8,
    btn: "Acceder aux chapitres"
  },

  {
    id: 9,
    title: "Return to Player",
    description: "Un jour, le monde est devenu un jeu...",
    author: "UMKY / SEHON",
    tag: "Fantastique",
    img: image9,
    btn: "Acceder aux chapitres"
  },

  {
    id: 10,
    title: "Sweet Home",
    description: "Après une tragédie familiale inattendue, un lycéen solitaire...",
    author: "Carnby Kim / Youngchan Hwang",
    tag: "Thriller",
    img: image10,
    btn: "Acceder aux chapitres"
  }

];


export default cards