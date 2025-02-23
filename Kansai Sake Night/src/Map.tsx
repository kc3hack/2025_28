import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { fetchIzakayasList } from "../utils/supabaseFunction"; // Supabaseの関数をインポート

// Google Maps APIキー
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// マップのデフォルト設定（画面いっぱい）
const mapContainerStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
};

// 大阪の中心座標（現在地取得失敗時のデフォルト）
const defaultCenter = { lat: 34.6937, lng: 135.5023 };

// 居酒屋データの型定義
type Izakaya = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  google_maps_url: string; // Google MapsのURLを追加
};

const Map: React.FC = () => {
  const [izakayas, setIzakayas] = useState<Izakaya[]>([]);
  const [loading, setLoading] = useState(true);
  const [center, setCenter] = useState(defaultCenter); // マップの中心
  const [selectedIzakaya, setSelectedIzakaya] = useState<Izakaya | null>(null); // クリックした居酒屋のデータ

  // 現在地を取得してマップの中心を変更
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.warn("現在地が取得できませんでした。デフォルトの大阪中心を使用します。");
        }
      );
    }
  }, []);

  // Supabaseから居酒屋データを取得
  useEffect(() => {
    const loadIzakayas = async () => {
      const data = await fetchIzakayasList();
      if (data) {
        setIzakayas(data as Izakaya[]);
      }
      setLoading(false);
    };

    loadIzakayas();
  }, []);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0 }}>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY || ""}>
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
            {!loading &&
              izakayas.map((izakaya) => (
                <Marker
                  key={izakaya.id}
                  position={{ lat: izakaya.latitude, lng: izakaya.longitude }}
                  title={izakaya.name}
                  onClick={() => setSelectedIzakaya(izakaya)} // マーカークリックで選択
                />
              ))}

            {/* クリックしたマーカーの情報を表示 */}
            {selectedIzakaya && (
              <InfoWindow
                position={{ lat: selectedIzakaya.latitude, lng: selectedIzakaya.longitude }}
                onCloseClick={() => setSelectedIzakaya(null)} // InfoWindowを閉じる
              >
                <div>
                  <div>{selectedIzakaya.name}</div>
                  <a href={selectedIzakaya.google_maps_url} target="_blank" rel="noopener noreferrer">
                    Googleマップで見る
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="menu">
        <ul className="bottom">
          <li>
            <a href="http://localhost:5173/">ホーム</a>
          </li>
          <li>
            <a href="http://localhost:5173/sake">地酒一覧</a>
          </li>
          <li>
            <a href="http://localhost:5173/izakaya">居酒屋一覧</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Map;
