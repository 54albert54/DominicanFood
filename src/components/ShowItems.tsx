
import type { MenuItem } from "./data/itemsData";
import { AllMenus } from "./data/itemsData";

const ShowItems = () => {
  const onlyCategory = new Set(AllMenus.map((item) => item.categoryLabel));

  return (
    <section id="menu">
    {/* <div>
    <h2  className="text-3xl text-center relative z-10  font-semibold mb-20">Nuesto Menu</h2>
    
    </div> */}
    
    
    <section className="relative z-10 bg-blue-200/20 rounded-2xl flex flex-wrap justify-start gap-4 p-4 w-full sm:px-28">
      {Array.from(onlyCategory).map((category) => {
        const filteredMenu = AllMenus.filter((item) => item.categoryLabel === category);
        return (
          <section key={category} className="w-[430px] sm:w-full ">
            <div className="bg-slate-100 p-4 rounded-2xl h-full">
              <p id={category} className="font-bold text-2xl bg-slate-100 h-[74px] pt-6 text-center sticky top-16">{category}</p>
              <MenuForCategory filteredMenu={filteredMenu} />
            </div>
          </section>
        );
      })}
    </section>
    <div className="flex justify-center w-full my-10 relative z-80">
    <a href="#menu" className="inline-block rounded-lg bg-rojo-bandera px-5 py-3 text-sm font-medium text-white  transition hover:shadow-xl hover:bg-rojo-bandera ">Regresar al menu</a>
    </div>
    </section>
  );
};

export default ShowItems;

const MenuForCategory = ({ filteredMenu }: { filteredMenu: MenuItem[] }) => {
  return (
    <div className="rounded-2x">
      {filteredMenu.map((element, ind) =>{ 
        const addCentis = (element.price * 100/100).toFixed(2)
        return(
        <div key={ind} className="border border-transparent my-4 border-b-black/40">
          <div className="flex justify-between font-serif">
            <p>{element.name}</p>
            <p>${addCentis}</p>
          </div>
          <p className="text-sm font-light">{element.description}</p>
        </div>
      )})}
    </div>
  );
};
