import { useState } from 'react'
import './Sake.css'

function Sake() {
  const [] = useState(0)

  return (
    <>
      <header className="header-container">
        <div className="header-logo">
            <a href='http://localhost:5173/Home'>logo</a>
        </div>
      </header>

<div className='sake-item'>
    <h1>名前</h1>
    <ul>
        <li>
            <img src='image 1.svg' />
        </li>
        <li>
        <h3>ここにお酒の説明が入る</h3>
        </li>
    </ul>
    
</div>  

<div className='sake-item'>
    <h1>名前</h1>
    <ul>
        <li>
            <img src='image 1.svg' />
        </li>
        <li>
        <h3>ここにお酒の説明が入る</h3>
        </li>
    </ul>
    
</div> 

<div className='sake-item'>
    <h1>名前</h1>
    <ul>
        <li>
            <img src='image 1.svg' />
        </li>
        <li>
        <h3>ここにお酒の説明が入る</h3>
        </li>
    </ul>
    
</div> 

<div className='sake-item'>
    <h1>名前</h1>
    <ul>
        <li>
            <img src='image 1.svg' />
        </li>
        <li>
        <h3>ここにお酒の説明が入る</h3>
        </li>
    </ul>
    
</div> 

<div className='sake-item'>
    <h1>名前</h1>
    <ul>
        <li>
            <img src='image 1.svg' />
        </li>
        <li>
        <h3>ここにお酒の説明が入る</h3>
        </li>
    </ul>
    
</div> 

<div className='sake-item'>
    <h1>名前</h1>
    <ul>
        <li>
            <img src='image 1.svg' />
        </li>
        <li>
        <h3>ここにお酒の説明が入る</h3>
        </li>
    </ul>
    
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

export default Sake
