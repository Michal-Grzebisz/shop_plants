import React, { useState } from 'react'
import plants from './_plantsData.js'
import PlantsItem from './_PlantsItem'

const Shop = () => {

    const [plantsItems, setPlantsSet] = useState(plants)

    return (
        <>
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
           <p>dupa</p>
        </>
    )
}

export default Shop