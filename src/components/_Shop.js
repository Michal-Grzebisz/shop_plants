import React, { useState } from 'react'
import NavBar from './_NavBar.js'
import plants from './_plantsData.js'
import PlantsItem from './_PlantsItem'

const Shop = () => {

    const [plantsItems, setPlantsSet] = useState(plants)
    const [basket, setBasket] = useState([])


    const addItem = (e) => {
       console.log(e.target.value)
    }

    return (
        <>
            <div className="header_container container">
                <NavBar />
            </div>
            <section className="shop_list container">
                {
                    plantsItems.map(item => {
                        return (
                            <>
                                    <PlantsItem item={item} addItem={addItem}/>
                            </>
                        )
                    })
                }
            </section>
        
        </>
    )
}

export default Shop