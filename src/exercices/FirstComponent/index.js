import React from 'react'

import SecondComponent from './SecondComponent.js'
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
    </div>
  )
}

export default FirstComponent;
