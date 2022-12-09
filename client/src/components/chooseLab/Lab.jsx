import React from 'react'

const Lab = ({name, certificate, timings, location, processingTime, price, color}) => {
  return (
    <div className='flex justify-between pt-3'>
        <div>
            <p className='font-medium'>{name}</p>
            <div className='flex gap-[3rem] text-[0.85rem]'>
                <span>{certificate}</span>
                <span><span className='font-bold'>Timings:</span> {timings}</span>
            </div>
            <p className='text-[0.85rem]'>{location}</p>
            <p className='text-[0.85rem]'>Processing time: {processingTime}</p>
            <button className='text-white bg-[#01B37A] rounded pl-4 pr-4 pt-1 pb-1'>Select Lab</button>
        </div>
        <div className='pt-[2.5rem]'>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default Lab