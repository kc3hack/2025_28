import { useEffect, useState } from 'react'
import './Izakaya.css'
import { fetchIzakayasList } from "../utils/supabaseFunction";

function Izakaya() {
    const [izakayaList, setIzakayaList] = useState<any[]>([]);

    useEffect(() => {
        const getIzakayaList = async () => {
            const data = await fetchIzakayasList();
            setIzakayaList(data || []);
        };
    
        getIzakayaList();
    }, []);

    return (
        <>
            <header className="header-container">
                <div className="header-logo">
                    <img src="logo.png"/>
                </div>
            </header>

            <div className="izakaya-list">
                {izakayaList.length > 0 ? (
                    izakayaList.map((izakaya, index) => (
                        <a key={index} href={`http://localhost:5173/izakaya/${izakaya.id}`}>
                            <div className="izakaya-item" key={index}>
                                <h2>{izakaya.name}</h2>
                                <img src={izakaya.image_url || 'default-image.svg'} alt={izakaya.name} />
                            </div>
                        </a>
                    ))
                ) : (
                    <p>居酒屋が見つかりませんでした。</p>
                )}
            </div>

            <div className='menu' >
                <ul className='bottom'>
                    <li>
                        <a href='http://localhost:5173/'>ホーム</a>
                    </li>
                    <li>
                        <a href='http://localhost:5173/sake'>地酒一覧</a>
                    </li>
                    <li>
                        <a href='http://localhost:5173/map'>マップ</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Izakaya