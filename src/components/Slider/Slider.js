import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './Slider.module.css';
import { imageSlider } from "../data/posts.js";

console.log(styles.carousel);
function Slider() {

//{  <div> {imageSlider[0].id} </div> }
//{ imageSlider.map(function (elt) { return <div> {elt.id} </div> }) }
//        { imageSlider.map(function (elt) { return <div> {elt.title}, {elt.text}, {elt.imageUrl} </div> }) }
//        { (() => [<div> coucou </div>,<div> coucou2 </div> ]) () }

//        { maList() }

    // function maList(){
    //     var all = []
    //     for (var i = 0; i < imageSlider.length; i++) {
    //         all.push(
    //             <div className="imageSlider">
    //                 <img src={imageSlider[i].imageUrl } alt="Image d'Alvina" />
    //                 <div className="overlaySlider">
    //                     <h2 className="overlaySlider_title">{imageSlider[i].title}</h2>
    //                     <p className="overlaySlider_text">{imageSlider[i].text}</p>
    //                 </div>
    //             </div>)
    //     }
    //     return all   
    // setItemsListRef: (node: HTMLUListElement) => void; setItemsListRef={null}   setThumbsRef={null}

    // }
    return (<Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} div className={styles.contenant}>
        { imageSlider.map(function (elt) { return <div className={styles.contenant}>
                    <img className={styles.imgSlider} src={elt.imageUrl } alt="webtoons" />
                    <div className={styles.overlay}>
                        <h2 className={styles.overlay__title}>{elt.title}</h2>
                        <p className={styles.overlay__text}>{elt.text}</p>
                    </div>
                </div>}) }
    </Carousel>)
}

// const Button = ({ text }) => {
//     return (
//         <button>
//             {text}
//         </button>
//     );
// };


export default Slider;