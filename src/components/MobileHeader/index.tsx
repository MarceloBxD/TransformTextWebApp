import { IconClose, IconHamburguer, IconHelp } from "../../assets/images/svgs";
import { useApp } from "../../contexts/ContextApi";
export default () => {
  const { setShowDropDown, showDropDown, setModalIsOpen }: any = useApp();
  return (
    <div
      style={{ backgroundColor: "#7D53DE" }}
      className="w-100 h-20 px-5 py-5 flex items-center justify-between md:hidden"
    >
      <div>
        <h1 className="text-white font-bold">Text Transform</h1>
      </div>
      <div>
        <img
          onClick={() => setShowDropDown(!showDropDown)}
          className="w-8 h-8 cursor-pointer hover:scale-110 hover:-translate-x-2 transition-all ease-linear duration-200"
          src={IconHamburguer}
        />
      </div>
      {showDropDown && (
        <div className="absolute transition-all top-14 border border-2 border-violet-500 right-5 w-auto p-3 h-100 bg-white">
          <div className="flex gap-5 flex-col justify-center items-center">
            <div className="flex items-center gap-5">
              <p className="text-xs ">Sair</p>
              <img
                src={IconClose}
                onClick={() => setModalIsOpen(true)}
                className="cursor-pointer"
                width={"20px"}
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="text-xs ">Help</p>
              <img src={IconHelp} className="cursor-pointer" width={"20px"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
