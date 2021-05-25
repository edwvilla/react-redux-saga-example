import React from 'react'

const CardComponent = ({user}) => {
    return (
        <div className="card">
            <div className="cardBody">
                <h1 className="cardTitle">{user.name}</h1>
                <h3 className="cardSubTitle">{user.company.name}</h3>
                <p className="cardText">{user.company.catchPhrase}</p>
            </div>
        </div>
    )
}

export default CardComponent