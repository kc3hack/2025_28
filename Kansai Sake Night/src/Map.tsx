import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { createClient } from "@supabase/supabase-js";

// Supabaseの設定（VITE_ 形式）
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Google Maps APIキー
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// マップのデフォルト設定（画面いっぱい）
const mapContainerStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
};

const defaultCenter = { lat: 34.6937, lng: 135.5023 }; // 大阪の中心地

// 居酒屋データの型定義
type Izakaya = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

const Map: React.FC = () => {
  const [izakayas, setIzakayas] = useState<Izakaya[]>([]);
  const [loading, setLoading] = useState(true);

  // Supabaseから居酒屋データを取得
  useEffect(() => {
    const fetchIzakayas = async () => {
      const { data, error } = await supabase.from("izakayas").select("id, name, latitude, longitude");
      if (error) {
        console.error("データ取得エラー:", error);
      } else {
        setIzakayas(data as Izakaya[]);
      }
      setLoading(false);
    };

    fetchIzakayas();
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0 }}>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY || ""}>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={12}>
          {loading ? null : izakayas.map((izakaya) => (
            <Marker key={izakaya.id} position={{ lat: izakaya.latitude, lng: izakaya.longitude }} title={izakaya.name} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;