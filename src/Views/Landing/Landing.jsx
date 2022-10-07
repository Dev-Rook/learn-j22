import React from 'react'
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css"

import KnotsRopes from '../Page-Sections/Knots-Ropes/KnotsRopes'
import Sails from '../Page-Sections/Sails/Sails'
import HullStructure from '../Page-Sections/Hull-Scructure/HullStructure'
import Manuevering from '../Page-Sections/Manuevering/Manuevering'


const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <KnotsRopes />
      <Sails />
      <HullStructure />
      <Manuevering />
    </div>
  )
}

export default Landing