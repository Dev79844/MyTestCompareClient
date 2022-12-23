import React from 'react'
import {Icon} from "@iconify/react"

const UploadPopup = (props) => {
  return (
    <div className='relative'>
        <Icon icon="charm:cross" onClick={props.closeModal} className="text-3xl" />
        <h2 className='text-3xl text-center font-bold'>Upload report</h2>
        <h3 className='text-3xl'>Name: {props.name}</h3>
        <h3 className='text-3xl pt-4'>Test:</h3>
    </div>
  )
}

export default UploadPopup