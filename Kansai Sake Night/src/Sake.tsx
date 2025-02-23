import { useEffect, useState } from 'react';
import './Sake.css';
import { fetchSakeList } from "../utils/supabaseFunction";

function Sake() {
  const [sakeList, setSakeList] = useState<any[]>([]);

  useEffect(() => {
    const getSakeList = async () => {
      const data = await fetchSakeList();
      setSakeList(data || []);
    };

    getSakeList();
  }, []);

  return (
    <>
      <header className="header-container">
        <div className="header-logo">
          <h1>logo</h1>
        </div>
      </header>

      <div className="sake-list">
        {sakeList.length > 0 ? (
          sakeList.map((sake, index) => (
            <div key={index} className="sake-item">
              <h1>{sake.name}</h1>
              <ul>
                <li>
                  <img src={sake.image_url || 'default-sake.svg'} alt={sake.name} />
                </li>
                <li>
                  <h3>{sake.description}</h3>
                </li>
              </ul>
            </div>
          ))
        ) : (
          <p>日本酒が見つかりませんでした。</p>
        )}
      </div>

      <div className="menu">
        <ul className="bottom">
          <li>
            <a href="http://localhost:5173/home">HOME</a>
          </li>
          <li>
            <a href="http://localhost:5173/izakaya">IZAKAYA</a>
          </li>
          <li>
            <a href="http://localhost:5173/map">MAP</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sake;