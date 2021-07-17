import React, { useState } from 'react'
import NavBar from './_NavBar.js'
import plants from './_plantsData.js'
import PlantsItem from './_PlantsItem'

const Shop = () => {

    const [plantsItems, setPlantsSet] = useState(plants)

    return (
        <>
          <NavBar />
           {
               plantsItems.map(item => {
                   return (
                       <>
                       <PlantsItem item={item} />
                       <img src="../assets/Alokazja_Azlani.jpg" alt="" style={{width:"250px", height:"250px  "}}/>
                       </>
                   )
               })
           }
        </>
    )
}

export default Shop