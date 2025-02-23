import { useState } from 'react'
import './Izakaya.css'

function Izakaya() {
    const [] = useState(0)
    return (
        <>
         <header className="header-container">
        <div className="header-logo">
            <a href='http://localhost:5173/Home'>logo</a>
        </div>
        </header>

        <div className='izakaya-item'>
        <h1>名前</h1>
        <img src='image 4.svg' />
        </div>

        <div className='menu' >
        <ul className='bottom'>
            <li>
                <a href='http://localhost:5173/Home'>HOME</a>
            </li>
            <li>
                <a href='http://localhost:5173/Sake'>SAKE</a>
            </li>
            <li>
                <a href='http://localhost:5173/Izakaya'>IZAKAYA</a>
            </li>
        </ul>
    </div>


        </>
    )
}
export default Izakaya