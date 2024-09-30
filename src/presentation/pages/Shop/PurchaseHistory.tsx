import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Article from '../../components/PurcharseHistory/article';

const PurchaseHistory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        { title: "Zapatos nike", date: "2024-10-09", hour: "10:10:01", quantity: 2, total: 50, imgurl: "https://th.bing.com/th/id/R.53d3b6ed24f12d1d6b4e3cd1efbb38cf?rik=puYH5mwsA5sTCw&pid=ImgRaw&r=0" },
        { title: "Cinta de Estiramiento", date: "2024-10-09", hour: "10:10:01", quantity: 1, total: 10, imgurl: "https://th.bing.com/th/id/OIP.6NSZjqhAjRbIASVEUpVTjgHaFj?rs=1&pid=ImgDetMain" },
        { title: "Zapatos Adidas", date: "2023-08-09", hour: "10:10:01", quantity: 1, total: 50, imgurl: "https://th.bing.com/th/id/OIP.P9zSaSgxSU4E4WPWH_HaXQAAAA?rs=1&pid=ImgDetMain" },
        { title: "Zapatos Puma", date: "2024-07-10", hour: "10:10:01", quantity: 2, total: 101, imgurl: "https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw339afa88/images/large/2CC453426-negro.jpg?sw=1200&sh=1200&sm=fit" },
    ];

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredArticles = data.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className="w-full relative bg-secondary">
            <div className="top-16 left-0 bottom-0 sticky w-full xl:max-w-[1500px] xl:m-auto xl:px-8 xl:rounded-b-xl shadow xl:shadow-md py-5 bg-secondary xl:mb-5">
                <h1 className="text-center  lg:text-2xl font-semibold text-xl mb-5">Historial de Compras</h1>
                <div className=" flex justify-center flex-col mb-2 w-full px-8">
                    <div className="flex items-center overflow-hidden rounded-lg mb-2">
                        <input className="w-full p-2 border-2 text-center rounded-lg  px-8" placeholder="Ej: zapatos nike" type="text" value={searchTerm} onChange={handleSearch} />
                        <div className=" flex h-full items-center px-4 top-0 right-0">
                            <FaSearch className="" />
                        </div>
                    </div>
                        <h1 className="">Resultados: {filteredArticles.length}</h1>
                </div>
            </div>
           <div className="w-full xl:max-w-[1500px] xl:m-auto px-8 lg:px-16 py-5">
                
                <Article articleData={filteredArticles} />
                
            </div>

        </div>
    );
};

export default PurchaseHistory;
