import React from 'react'
import Card from 'components/Card'
import Button from 'components/Button'

const FirstComponent= () => {
  return (
    <div style={{ padding:"100px"}}>
      <Button color="red" to="/styling-components">
        Les components stylées
      </Button>
      <br/>
      <br/>
      <Button color="green" to="/contexts">
        Les contexts
      </Button>
      <br/>
      <br/>
      <Card 
      Img = "https://wallpaperaccess.com/full/6999297.jpg" 
      Title = "Giga Chad"
      Description = "Si vous voulez etre aussi Chad que le giga chad, lisez son histoire."
      Btn = "Acceder aux chapitres"
      />

    <Card 
      Img = "https://wallpaperaccess.com/full/6999297.jpg" 
      Title = "Giga Chad"
      Description = "Si vous voulez etre aussi Chad que le giga chad, lisez son histoire."
      Btn = "Acceder aux chapitres"
      />

      <Card 
      Img = "https://wallpaperaccess.com/full/6999297.jpg" 
      Title = "Giga Chad"
      Description = "Si vous voulez etre aussi Chad que le giga chad, lisez son histoire."
      Btn = "Acceder aux chapitres"
      />

        
    </div>
  )
}

export default FirstComponent;
