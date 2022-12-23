import React from 'react'
import ClientInfo from '../../../components/admins/ClientInfo'
import Sidebar from '../../../components/admins/Sidebar'
import TopStrip from '../../../components/admins/TopStrip'

const Bookings = () => {

    const names = ["dev", "preet", "denil", "manish", "darpan", "sheel", "anuj", "jaivik"]

    const blocks = names.map(entry => <ClientInfo name={entry} />)

  return (
    <div className='font-Roboto bg-background'>
        <div className='lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid'>
            <Sidebar active="bookings" />
            <div className='px-5 mt-4'>
                <TopStrip />
                <p className='text-4xl font-bold pt-[7rem]'>Client Database</p>
                <div className='h-[70rem] bg-white overflow-x-auto mt-4 mx-8 rounded-3xl'>
                    {blocks}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bookings