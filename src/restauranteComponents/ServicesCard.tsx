import { useEffect, useState } from "react";

interface Porps {
  service: {
    title: string;
    href: string;
    img: string;
    description: string;
  };
}

const ServicesCard =({service}:Porps)=>{
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false);
  //   },3000)
  // }, [show]);

  const isMouseOut = () => {
    show && setTimeout(() => {
      setShow(false);
     
    },1000)
    
    
  };

  return(
    <li
     onClick={() => setShow(!show)}
     onMouseLeave={isMouseOut}
    //  onMouseOut={() => isMouseOut()}
     className="group relative cursor-pointer">
      
    {!show ? (
      <div  className="group relative block">
      <p className="absolute inset-6 z-50 hidden group-hover:block  transition-all  duration-600  text-white text-2xl font-semibold">Ver Mas...</p>
      <img
        src={service.img}
        alt=""
        className="aspect-square w-full h-[340px] object-cover transition duration-500 group-hover:blur-sm"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
      </div>
    </div>
  ) : (
    <div className="w-full h-[340px] bg-rojo-bandera rounded-xl border-4 border-rojo-bandera">
     <div className="w-full h-full bg-white rounded-xl border-4 border-white">
     <div className="w-full h-full bg-[#f2f2f2] rounded-xl border-4 border-azul-bandera px-4 pt-6 overflow-scroll">
      <p>{"  "}{service.description}</p>
     </div>
     </div>
    </div>
    )}
    <p className="mt-4 text-2xl font-medium text-gray-900">{service.title}</p>
  </li>
    )
};

export default ServicesCard; 