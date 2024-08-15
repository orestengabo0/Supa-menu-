import React from 'react'

interface Props {
    category: string,
    consumer: string,
    consumerPrice: number,
}

const OverviewCategoriesInfo = ({category, consumer, consumerPrice}:Props) => {
  return (
    <div className='card p-3'>
        <div className='d-flex justify-content-between'>
            <h6>{category}</h6>
            <p className='text-warning'>View details</p>
        </div>
        <p className='text-secondary'>sales</p>
        <div className='d-flex justify-content-between'>
            <p>{consumer}</p>
            <p>{consumerPrice}</p>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
            <p>{consumer}</p>
            <p>{consumerPrice}</p>
        </div>
    </div>
  )
}

export default OverviewCategoriesInfo