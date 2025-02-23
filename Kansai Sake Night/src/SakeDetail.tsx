import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSakeList } from "../utils/supabaseFunction";
import "./SakeDetail.css";

function SakeDetail() {
  const { id } = useParams<{ id: string }>(); // URLの id を取得
  const [sake, setSake] = useState<any | null>(null);

  useEffect(() => {
    const getSake = async () => {
      const data = await fetchSakeList();
      if (data) {
        const foundSake = data.find((item) => String(item.id) === id);
        setSake(foundSake || null);
      }
    };

    getSake();
  }, [id]);

  if (!sake) {
    return <p className="error-message">日本酒の情報が見つかりませんでした。</p>;
  }

  return (
    <div className="sake-detail">
      <header className="header">
        <h1>{sake.name}</h1>
      </header>

      <div className="sake-content">
        <img
          src={sake.image_url || "/default-sake.svg"}
          alt={sake.name}
          className="sake-image"
        />
        <div className="sake-info">
          <p><strong>産地:</strong> {sake.region}</p>
          <p><strong>種類:</strong> {sake.type}</p>
          <p><strong>風味:</strong> {sake.flavor}</p>
        </div>
      </div>

      <div className="back-button">
        <Link to="/sake">← 日本酒一覧に戻る</Link>
      </div>
    </div>
  );
}

export default SakeDetail;