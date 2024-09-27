import React from "react";

const Banner = () => {
    return (
        <div className=" min-w-full justify-center flex flex-col items-center bg-secondary gap-12">
         
         <div className="text-center text-white">
         
            <h1 className="text-4xl font-bold">Conectate y ejercitate con Trotapp</h1>
            <p className="font-normal">Encuentra compañeros para trotar, andar en bicicleta y mejorar tu salud juntos.</p>
        </div> 
          <div className="flex gap-6">
            <button className="btn btn-outline rounded-full">Registrarse</button>
            <button className="btn btn-outline rounded-full">Iniciar sesion</button>
          </div>
        </div>
    )
}

export default Banner;