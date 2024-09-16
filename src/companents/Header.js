import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <>
      <div className="bg-slate-500 h-28 space-y-4 ">
        {/* <div className="w-full bg-white  " >sadsad</div> */}
        <div className="w-full flex   bg-slate-400  items-center p-2 justify-between ">
          <div className="bg-black">
            <span>Logo</span>
          </div>
          <div className="flex  items-center ">
            <CiMenuBurger />
            <span className="pl-2" >MENÜ</span>
          </div>
          <div className="flex  w-20 items-center justify-between ">
               <CiSearch size={25}/>
               <FiShoppingCart size={25}/> 
          </div>
        </div>
      </div>
    </>
  );
};
