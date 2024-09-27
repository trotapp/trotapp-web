import React from "react";
import bannerImg from "../../../assets/bannerImg.webp";
import { useEffect, useState, useRef } from "react";

const Banner = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const bannerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect(); // Deja de observar una vez que se cargó
                }
            },
            { threshold: 0.1 } // Inicia cuando el 10% del elemento es visible
        );
        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }
        return () => {
            if (bannerRef.current) observer.unobserve(bannerRef.current);
        };
    }, []);

    return (
        <div
            ref={bannerRef}
            className={`min-w-full h-screen flex flex-col justify-center items-center gap-10 bg-cover bg-center transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
                backgroundImage: isLoaded ? `url(${bannerImg})` : "none",
            }}
        >
            {/* Contenedor de Texto */}
            <div className="text-center p-4 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Conéctate y ejercítate con Trotapp
                </h1>
                <p className="font-normal text-sm md:text-lg">
                    Encuentra compañeros para trotar, andar en bicicleta y mejorar tu salud juntos.
                </p>
            </div>

            {/* Contenedor de Botones */}
            <div className="flex flex-col lg:gap-20 sm:flex-row gap-4 sm:gap-8 text-white">
                <button className="btn btn-outline rounded-full border-white text-white px-6 py-2">
                    Registrarse
                </button>
                <button className="btn btn-outline rounded-full border-white text-white px-6 py-2">
                    Iniciar sesión
                </button>
            </div>
        </div>
    );
};

export default Banner;

