import { useEffect, useState } from "react";
import { dataOfferRestaurante } from "./data";

const title = "Nuestras specialidades"
const ShowAllOfferts = () => {
  const [offertIndex, setOffertIndex] = useState(0);
  const data = dataOfferRestaurante[offertIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffertIndex((offertIndex + 1) % dataOfferRestaurante.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offertIndex]);

  return (
   
      <section className="overflow-hidden relative flex flex-col  bg-gray-50 ">
        <p className=" relative top-[60px]   px-4 py-2 sm:block font-light text-center  md:text-4xl text-2xl   font-semibobold  text-gray-900 ">
                {title}
              </p>
        <div className="sm:grid sm:grid-cols-2 sm:items-center flex-col">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <div className="h-[140px] ">
                
                <span className="text-3xl  font-bold text-left text-gray-900 md:text-4xl ">
                  {data.title}
                </span>
              </div>
              <div className="h-[320px] relative -top-20 block sm:hidden">
              <ShowImages image={data.heroImage}/>
              </div>

              <p className="hidden text-gray-500 text-left md:mt-4 md:block px-3 h-[240px] overflow-scroll relative -top-16">
                {data.description}
              </p>

              <div className="-mt-20 md:mt-8">
                <a
                  href={`/ofertas/${data.slug}`}
                  className="inline-block rounded bg-rojo-bandera px-12 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Ver menu
                </a>
                <div className="flex justify-center items-center gap-3 pt-4">
                {dataOfferRestaurante.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setOffertIndex(index);
                    }}
                    className={`cursor-pointer relative size-6 ${offertIndex === index ? "bg-red-400" : "bg-slate-600"} rounded-full`}
                  >
                    
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            {/* <div className="size-[120px] absolute z-10 -bottom-10 -left-4 sm:-left-10  bg-white rounded-full">
            <img  src="public/dummyPhoto/logoDummyremovebg.png" alt="" />
            </div> */}
           
            <div
            className="w-[420px] hidden sm:block"
            >
              <ShowImages image={data.heroImage}/>
            {/* <img
            alt=""
            src={data.heroImage}
            className=" h-full w-full object-cover sm:h-[calc(100%_-_4rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] pr-8"
          /> */}
          </div>
          </div>
        </div>
      </section>
   
  );
};

export default ShowAllOfferts;

const ShowImages = ({image}) => {
  return(
    <div
    className="w-[420px] h-[260px] sm:w-[520px] sm:h-[360px]"
    >
    <img
    alt=""
    src={image}
    className=" h-full w-full object-cover sm:h-[calc(100%_-_4rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] relative right-8 sm:pr-8"
  />
  </div>
  )

}
