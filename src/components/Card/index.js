import React from 'react' 
import styles from './Card.module.css'

// import { Link } from 'react-router-dom'

const Card = ({Img,Title,Description,Btn}) => {

  return (
      <div className={styles.card}>
          <div className={styles.card_body}>
              <img src={Img} alt="" className={styles.card_img}/>
              <h2 className={styles.card_title}> {Title}</h2>
              <p className={styles.card_description}>{Description}</p>
          </div>
          <button className={styles.card_btn}>{Btn}</button>
      </div>

  )
}

export default Card