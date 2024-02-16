import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='bg-white shadow-lg px-2 py-1 pb-3 rounded-lg space-y-3 md:pb-5 md:px-3 lg:space-y-2 xl:px-2'>
            {children}
        </div>
    )
}

export default Card
