import React from 'react'

const PlantsItem = ({item}) => {
    return(
        <>
        <p>{item.title}</p>
        <img src={item.img} alt={item.title}/>
        <p>{item.price} zł</p>
        </>
    )
}

export default PlantsItem