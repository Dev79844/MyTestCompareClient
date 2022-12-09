import React from 'react'

const SelectedTest = ({text}) => {
  return (
    <div>
        <div className='flex justify-between text-[0.85rem] bg-[#01B37A] p-1 rounded text-white'>
            <p>{text}</p>
            <p className='text-[#F03A47]'>X</p>
        </div>
    </div>
  )
}

export default SelectedTest