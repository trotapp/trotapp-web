import React, { useState, useEffect, useRef } from 'react';
import video from '../../../assets/videos/video.webm';
import banner from '../../../assets/placeholder.jpg';

const Banner: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Detectamos si el video está visible inmediatamente o si requiere lazy loading
    useEffect(() => {
        const videoTop = videoRef.current?.getBoundingClientRect().top || 0;
        if (videoTop < window.innerHeight) {
            setIsVideoVisible(true);
        } else {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVideoVisible(true);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (videoRef.current) {
                observer.observe(videoRef.current);
            }

            return () => {
                if (videoRef.current) {
                    observer.unobserve(videoRef.current);
                }
            };
        }
    }, []);

    const handleVideoCanPlay = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div className="w-full h-screen overflow-hidden">
            {!isVideoLoaded && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                    <img
                        src={banner}
                        alt="Placeholder"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {isVideoVisible && (
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onCanPlay={handleVideoCanPlay}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <source src={video} type="video/webm" />
                    Tu navegador no soporta video HTML5.
                </video>
            )}

            <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 gap-10 md:gap-16 lg:gap-20">
                <div className="text-center text-white sm:px-4 max-w-lg sm:max-w-xl md:max-w-5xl lg:max-w-full">
                    <h1 className="text-4xl xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-tight">
                        Conéctate y ejercítate con Trotapp
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl mt-2 sm:mt-4">
                        Encuentra compañeros para trotar, andar en bicicleta y mejorar tu salud juntos.
                    </p>
                </div>

                <div className='flex w-60 sm:w-80 md:w-96 lg:w-1/3 justify-between space-x-4'>
                    <button className="btn btn-outline rounded-full border-white text-white px-4 py-2 text-sm sm:px-6 sm:py-2.5 md:text-base lg:text-lg">
                        Registrarse
                    </button>
                    <button className="btn btn-outline rounded-full border-white text-white px-4 py-2 text-sm sm:px-6 sm:py-2.5 md:text-base lg:text-lg">
                        Iniciar sesión
                    </button>
                </div>
            </div>
            <div className="scrolldown-wrapper absolute left-1/2 bottom-5 transform -translate-x-1/2 text-center z-20">
                <div className="scrolldown border-2 border-white rounded-full h-12 w-8 flex justify-center items-center">
                    <svg height="30" width="10">
                        <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
                        <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
                    </svg>
                </div>
            </div>

        </div>
    );
};

export default Banner;
