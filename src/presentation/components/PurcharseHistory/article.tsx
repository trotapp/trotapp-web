import React from 'react';

interface ArticleProps {
    articleData: {
        title: string;
        date: string, 
        hour: string, 
        quantity: number, 
        total: number,
        imgurl: string,
    }[];
}

const Article: React.FC<ArticleProps> = ({ articleData }) => {
    return (
        <>
            {articleData.map((article, index) => (
                <article
                    key={index}
                    className="rounded-lg p-5 flex bg-primary gap-x-2 md:gap-x-10 hover:shadow-none shadow-md mb-5"
                >
                    <div className="w-2/5 md:w-[30%] lg:w-[20%] rounded-lg bg-slate-400 overflow-hidden">
                        <img
                            className="h-full object-cover"
                            src={article.imgurl}
                            alt={article.title} 
                        />
                    </div>
                    <div className="w-full grid gap-y-2">
                        <span className="font-semibold text-lg sm:text-xl xl:text-2xl">{article.title}</span>
                        <div className="flex justify-between">
                            <span className="font-thin text-sm sm:text-lg xl:text-xl">Fecha: {article.date}</span>
                            <span className="font-thin text-sm sm:text-lg xl:text-xl">{article.hour}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-thin sm:text-lg ">Cantidad: {article.quantity}</span>
                            <span className="font-thin sm:text-lg ">Total: {article.total}$</span>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}

export default Article;
