import React from 'react'
import  styles from './animated-image.module.css'
import  im  from './img.jpg'

const Image = () => {
    
  const [wobble, setWobble] = React.useState(0)
  return (
      
    <img
      className={styles.image}
      src={im}
      alt="randomised!"
      onClick={() => setWobble(1)}
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
      width="100%" height="800%"
    />

  )

}
export default Image
