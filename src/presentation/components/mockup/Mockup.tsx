import React from "react";
import MockupLayout from "./layout/MockupLayout";
import MockupPhone from "./phone/MockupPhone";
import qr from "./images/qr.webp";
import phone1 from "./images/phone-1.webp";
import phone2 from "./images/phone-2.webp";

const Mockup = () => {
  return (
    <div className="w-full max-w-screen-2xl px-0 lg:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      <div className="flex justify-center relative mx-auto md:mx-0">
        <MockupPhone id={1} urlImage={phone1} />
        <span className="hidden sm:flex sm:absolute right-10 md:right-0 bottom-2">
          <MockupPhone id={1} urlImage={phone2} />
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          Conectando personas para ejercitarse.
        </h1>
        <p className="font-normal">
          En Trotapp, unimos a personas cercanas que desean trotar, hacer
          ejercicio o andar en bicicleta, creando un espacio seguro y motivador
          para disfrutar de la actividad física juntos.
        </p>
        <div className="w-full">
          <p className="mb-2">Escanea el código QR:</p>
          <MockupPhone id={1} urlImage={qr} />
        </div>
        <MockupLayout />
      </div>
    </div>
  );
};

export default Mockup;
