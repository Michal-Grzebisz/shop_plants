import React from 'react'

const PlantsItem = ({item, addItem}) => {
    

    return(
        <>
            <div className="list_item">
                <p>{item.title}</p>
                <img src={item.img} alt={item.title} style={{height:'300px', width:'300px'}}/>
                <p>{item.price} zł</p>
                <button onClick={addItem}>Dodaj</button>
            </div>
        </>
    )
}

export default PlantsItem