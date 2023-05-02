import { hamburguer } from "../../assets/images/svgs";

export default () => {
  return (
    <div
      style={{ backgroundColor: "#7D53DE" }}
      className="w-100 h-20 px-5 py-5 flex items-center justify-betweem md:hidden"
    >
      <div>
        <img className="w-8 h-8 cursor-pointer" src={hamburguer} />
      </div>
    </div>
  );
};
