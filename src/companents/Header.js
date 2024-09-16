import { CiHeart, CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/images/Logo.jpg"
export const Header = () => {
  const headerItems = [
    {
      label:"Giriş Yap",
      icon:<CiUser size={25} />
    },
    {
      label:"Favorilerim",
      icon:<CiHeart size={25} />
    },
    {
      label:"Sepetim",
      icon: <FiShoppingCart size={25}/>
    }
  ]
  return (
    <>
      <div className="h-28 px-4 space-y-4 ">
        {/* <div className="w-full bg-white  " >sadsad</div> */}
        <div className="w-full flex     items-center p-2 justify-evenly ">
          <div className="flex items-center" >
            <div className="h-20 w-20 bg-black flex items-center">
              <img className="object-cover" src={Logo} alt="Glamouria" />
            </div>
           <div className="flex flex-col">
              <h5 className="font-bold text-3xl uppercase pl-4 ">Glamouria</h5>
              <p className="text-xs text-end "  >Bir Sunay Kuruluşudur.</p>
           </div>
          </div>
          <div className="flex bg-slate-100 rounded-md items-center w-[35%] ">
              <input type="text" placeholder="Aradığınız ürün veya kategori yazınız" className="w-full outline-none h-10 p-3 bg-slate-100 rounded-md items-center flex " /> 
               <CiSearch className="pr-2 size-8" size={25}/>

          </div>
          <div className="flex w-[28%]  items-center justify-between ">
             {
              headerItems.map((i)=><div className=" w-full  flex  items-center " >
                <div className=" flex  cursor-pointer items-center">
                {i.icon}
                <span className="pl-1.5 ">{i.label}</span>
                </div>
                
              </div>)
             }  
               
          </div>
        </div>
      </div>
    </>
  );
};
