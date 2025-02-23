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
            <a key={index} href={`http://localhost:5173/sake/${sake.id}`}>
              <div className="sake-item">
                <h2>{sake.name}</h2>
                <img src={sake.image_url || 'default-sake.svg'} alt={sake.name} />
              </div>
            </a>
          ))
        ) : (
          <p>日本酒が見つかりませんでした。</p>
        )}
      </div>

      <div className="menu">
        <ul className="bottom">
          <li>
            <a href="http://localhost:5173/">ホーム</a>
          </li>
          <li>
            <a href="http://localhost:5173/izakaya">居酒屋一覧</a>
          </li>
          <li>
            <a href="http://localhost:5173/map">マップ</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sake;