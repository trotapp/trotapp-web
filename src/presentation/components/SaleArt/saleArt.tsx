import React from 'react';

interface ArticleProps {
    articleData: {
        title: string;
        date: string; 
        hour: string; 
        quantity: number; 
        total: number;
        description: string;
        imgurl: string;
    }[];
}

const Article: React.FC<ArticleProps> = ({ articleData }) => {
    return (
        <div className="w-full min-h-screen p-8 bg-primary">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {articleData.map((article, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                    >
                        <img
                            className="w-full h-48 object-cover"
                            src={article.imgurl}
                            alt={article.title}
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">
                                {article.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-4">
                                {article.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold text-green-600">
                                    ${article.total}
                                </span>
                                <button className=" btn bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Article;

