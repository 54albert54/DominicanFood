import { useEffect, useState } from "react";
import { dataOfferRestaurante } from "./data";

const title = "Nuestras specialidades";
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
    <section className="overflow-hidden relative flex flex-col  bg-blue-300/20 rounded-xl ">
      <p className=" relative top-[60px] text-black   px-4 py-2 sm:block font-light text-center  md:text-4xl text-2xl   font-semibobold   ">
        {title}
      </p>
      <div className="sm:grid sm:grid-cols-2 sm:items-center flex-col">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="h-[140px] ">
              <span className="text-3xl  font-bold text-left text-black md:text-4xl ">
                {data.title}
              </span>
            </div>
            <div className="h-[320px] relative -top-20 block sm:hidden">
              <ShowImages image={data.heroImage} setOffertIndex={setOffertIndex} offertIndex={offertIndex} />
            </div>

            <p className="hidden text-gray-700 text-left md:mt-4 md:block px-3 h-[240px] overflow-scroll relative -top-16">
              {data.description}
            </p>

            <div className="-mt-20 md:mt-8">
              <a
                href={`/ofertas/${data.slug}`}
                className="inline-block rounded-lg bg-rojo-bandera px-5 py-3 text-sm font-medium text-white  transition hover:shadow-xl hover:bg-rojo-bandera/75"
              >
                Ver menu
              </a>
            </div>
          </div>
        </div>
        <div className="relative ">
          {/* <div className="size-[120px] absolute z-10 -bottom-10 -left-4 sm:-left-10  bg-white rounded-full">
            <img  src="public/dummyPhoto/logoDummyremovebg.png" alt="" />
            </div> */}

          <div className="w-[420px] hidden sm:block relative">
            <ShowImages image={data.heroImage} setOffertIndex={setOffertIndex} offertIndex={offertIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowAllOfferts;

const ShowImages = ({ image , setOffertIndex, offertIndex }: { image: string , setOffertIndex: any, offertIndex: number }) => {
  return (
    <section>
      <div className="w-[420px] h-[260px] sm:w-[520px] sm:h-[360px] relative ">
        <img
          alt=""
          src={image}
          className=" absolute h-full w-full blur-lg object-cover sm:h-[calc(100%_-_4rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]  right-8 sm:pr-8"
        />
         <img
          alt=""
          src={image}
          className="w-[85%] ml-4 sm:m-4  h-[90%] sm:w-[95%] object-cover sm:h-[calc(100%_-_4rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] relative right-8 sm:pr-8"
        />
      </div>
      <div className="flex justify-center items-center gap-3 p-1 rounded-2xl relative -top-16 sm:-top-28 bg-slate-100/50 w-[180px] mx-auto ">
        {dataOfferRestaurante.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setOffertIndex(index);
            }}
            className={`cursor-pointer relative size-6 ${
              offertIndex === index ? "bg-rojo-bandera" : "bg-azul-bandera"
            } rounded-full`}
          ></div>
        ))}
      </div>
    </section>
  );
};
