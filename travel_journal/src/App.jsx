import React from 'react'

import Trip from '../components/Trip'
import Navbar from '../components/Navbar'
import data from './data.js'

export default function App() {
    const trips = data.map(item => {
        return (
            <Trip
            item={item}
            />
        )
    })
    
    return (
        <div className='main-container'>
            <Navbar/>
            {trips}
        </div>
    )
}