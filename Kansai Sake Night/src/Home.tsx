import { useState } from 'react';
import './Home.css';

function Home() {
  const [] = useState(0);

  return (
    <>
      <header className="header-container">
        <div>
          <h1>logo</h1>
        </div>
      </header>
      
      <div className="main-container">
        <div className="search-button">
         <a href="http://localhost:5173/sake">
           <button className="sake-button">
              <h2>お酒</h2>
              <img src="image 1.svg" alt="ロゴ" />
           </button>
          </a>
          
          <a href="http://localhost:5173/izakaya">
            <button className="izakaya-button">
             <h2>居酒屋</h2>
           </button>
          </a>
        </div>

        <div className="map-container">
          <a href="http://localhost:5173/map">
           <button className="map-button">
             <img src="Map.svg" alt="map"/>
             <h2>マップ</h2>
           </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;