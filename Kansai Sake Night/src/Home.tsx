import { useState } from 'react'
import './Home.css'

function Home() {
  const [] = useState(0)

  return (
    <>
      <header className="header-container">
        <div className="header-logo">
            <a href='http://localhost:5173/Home'>logo</a>
        </div>
      </header>
      <div className='search-button'>

        <button className='sake-button'>
            <h2>お酒</h2>
            <img src='image 1.svg' alt='ロゴ'></img>
        </button>
      

      
        <button className='izakaya-button'>
            <h2>居酒</h2>
        </button>
      </div>

    <div className='map-container'>
        <a href="http://localhost:5173/Map">
            <img src='Map.svg' alt='map' className='map-button'/>
        </a>
    </div>
    
    <div>
        <ul>
            <li>
                <a href='http://localhost:5173/Home'>HOME</a>
            </li>
            <li>
                <a href='http://localhost:5173/Home'>SAKE</a>
            </li>
            <li>
                <a href='http://localhost:5173/Home'>IZAKAYA</a>
            </li>
        </ul>
    </div>

    </>
  )
}

export default Home
