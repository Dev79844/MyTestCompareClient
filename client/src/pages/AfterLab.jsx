import React from 'react'
import tests from '../data/tests'
import SelectedTest from '../components/chooseLab/SelectedTest'
import { Icon } from '@iconify/react'

const AfterLab = () => {

    const selectTests = tests.map((entry)=> (
        <SelectedTest text={entry.test} />
    ))

  return (
    <div className='p-4 pb-12'>
        <div className="flex items-center gap-3">
          <Icon
            icon="carbon:chevron-left"
            color="black"
            inline={true}
            className="text-3xl sm:text-4xl"
          />
          <h3 className="text-2xl font-medium lg:text-3xl">Results</h3>
        </div>
        <div className='pt-4 pl-4 flex gap-2 flex-col'>
            <input type="text" className='bg-gray-200 rounded w-[95%] h-[4vh]'placeholder=' Ahmedabad' />
            <input type="text" className='bg-gray-200 rounded w-[95%] h-[4vh]'placeholder='  🔍   Add more tests or health packages' />
            <input type="text" className='w-[95%] h-[4vh] border-2 rounded' placeholder='Search your lab' />
        </div>
        <p className='text-center pt-4 text-[1rem] font-medium'>Labs offering the selected tests</p>
        <div className='grid grid-cols-2 gap-2 mt-3'>
            {selectTests}
        </div>
    </div>
  )
}

export default AfterLab