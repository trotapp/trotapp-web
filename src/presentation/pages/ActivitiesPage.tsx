/* eslint-disable react/react-in-jsx-scope */

const ActivitiesPage = () => {
    return (
        <div className="mt-20 md:flex md:item-center">
            <div className="md:w-[46.5rem] px-10 py-4 space-y-10">
                <h1 className="font-bold text-7xl">Entrena con personas que tengan tu motivacion</h1>
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold">Haz un seguimiento de tus actividades y compártelas. Analiza tu progreso. Mantén la motivación.</h2>
                    <button className="py-3 text-sm font-bold text-black uppercase rounded-md px-28 bg-primary">Registrate</button>
                </div>
            </div>
            <div className="md:w-[42.5rem]">
                <div className="flex flex-wrap items-center gap-5">
                <img src="https://www.cortaporlosano.com/pics/2023/03/quieres-ser-mas-rapido-estos-4-entrenamientos-de-sprint-te-haran-mas-explosivo-y-mejoraran-tu-forma-de-correr.webp" className="w-64 h-48 rounded-md" alt="" />
                <img src="https://ciclistaganador.com/wp-content/uploads/2021/01/cyclist-on-sunny-day-bike-adventure-travel-photo-1.jpg" className="w-64 h-48 rounded-md" alt="" />
                <img src="https://hintergrundbild.org/wallpaper/full/b/6/8/86755-yoga-hintergrundbilder-1920x1080-fuer-iphone-7.jpg" className="w-64 h-48 rounded-md" alt="" />
                <img src="https://citandalucia.com/wp-content/uploads/2023/04/f.elconfidencial.com_original_c5b_6d0_899_c5b6d089931c564ce67df4af59ee9056.jpg" className="w-64 h-48 rounded-md" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ActivitiesPage