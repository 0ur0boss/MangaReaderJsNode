import React from 'react' 
// import { Link } from 'react-router-dom'
import Card from 'components/Card'
import styles from './Home.module.css'
import image1 from '../../img/whiteblood.jpg'

const home = () => {
    
  return (

     //le container qui a toutes les cards
    <div className={styles.wrapper}>

    {/* une card avec les differents options */}
    <Card 
      Img = {image1}
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />

    <Card 
      Img = {image1} 
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />

    <Card 
      Img = {image1} 
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />
      
    <Card 
      Img = {image1} 
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />

    <Card 
      Img = {image1} 
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />

    <Card 
      Img = {image1} 
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />
    <Card 
      Img = {image1} 
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />

    <Card 
      Img = {image1} 
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />

    <Card 
      Img = {image1} 
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />

    <Card 
      Img = {image1}
      Title = "Titre Manga"
      Description = "Description du manga."
      Btn = "Acceder aux chapitres"
      />
    </div>
  )

  }

export default home