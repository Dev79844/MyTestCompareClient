import React from 'react'
import Lab from '../components/chooseLab/Lab'
import SelectedTest from '../components/chooseLab/SelectedTest'
import tests from "../data/tests"
import labs from "../data/lab"

const ChooseLab = () => {

    const selectTests = tests.map((entry)=> (
        <SelectedTest text={entry.test} />
    ))

    const selectLabs = labs.map((lab) => (
        <Lab 
            name={lab.name}
            certificate={lab.certificate}
            timings={lab.timings}
            location={lab.location}
            processingTime={lab.processingTime}
            price={lab.price}
        />
    ))

  return (
    <div className='p-5'>
        <div className='flex items-center gap-3'>
            <span>Arr</span>
            <h3 className='text-2xl font-medium'>Results</h3>
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
        <div className='mt-4'>
            <hr />
            <div className='flex justify-between'>
                <p>Lab Name</p>
                <p>Price</p>
            </div>
            <hr />
        </div>
       {selectLabs}
    </div>
  )
}

export default ChooseLab