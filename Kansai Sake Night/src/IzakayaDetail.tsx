import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchIzakayasList } from "../utils/supabaseFunction";
import "./IzakayaDetail.css";

function IzakayaDetail() {
  const { id } = useParams<{ id: string }>(); // URLの id を取得
  const [izakaya, setIzakaya] = useState<any | null>(null);

  useEffect(() => {
    const getIzakaya = async () => {
      const data = await fetchIzakayasList();
      if (data) {
        const foundIzakaya = data.find((item) => String(item.id) === id);
        setIzakaya(foundIzakaya || null);
      }
    };

    getIzakaya();
  }, [id]);

  if (!izakaya) {
    return <p className="error-message">居酒屋の情報が見つかりませんでした。</p>;
  }

  // menuがJSONオブジェクトの場合、配列に変換
  const menuItems = izakaya.menu ? Object.entries(izakaya.menu as Record<string, number>) : [];

    return (
    <div className="izakaya-detail">
        <header className="header">
            <h1>{izakaya.name}</h1>
        </header>

        <div className="izakaya-content">
        <img
            src={izakaya.image_url || "/default-izakaya.svg"}
            alt={izakaya.name}
            className="izakaya-image"
        />
        <div className="izakaya-info">
            {/* 🆕 JSON の menu をリスト表示 */}
            <p><strong>提供している地酒:</strong></p>
            <ul className="sake-menu">
            {menuItems.map(([sakeName, sakePrice]: [string, number]) => (
                <li key={sakeName}>
                {sakeName}（¥{sakePrice}）
                </li>
            ))}
            </ul>
            <p>
            <strong>Google マップ:</strong>{" "}
            <a href={izakaya.google_maps_url} target="_blank" rel="noopener noreferrer">
                ここをクリック
            </a>
            </p>
        </div>
        </div>

        <div className="back-button">
        <Link to="/izakaya">← 居酒屋一覧に戻る</Link>
        </div>
    </div>
    );
}

export default IzakayaDetail;