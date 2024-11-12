import React from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'


function Profile() {
  return (
    <div>
        <Header />
        <div className='px-10 md:px-20 my-10'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl'>Mi Lista</h2>
                <Link to='/add-listing'>
                    <Button>+ Añadir Auto</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Profile