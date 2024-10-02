import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/images/Logo.jpg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import {Sepet} from "./Sepetim"



export const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false)
  const className = menuOpen ? "right-[0px]" : "-right-[300px]"
  const headerItems = [
    {
      label: "Giriş Yap",
      icon: <CiUser size={25} />,
    },
    {
      label: "Favorilerim",
      icon: <CiHeart size={25} />,
    },
    {
      label: "Sepetim",
      icon: <FiShoppingCart size={25} />,
      onClick: () => {
        setOpen(true);
      },
    },
  ];
  return (
    <div className=" overflow-hidden sticky top-0 bg-white  ">
      {/* {open && (
        <div
          className="bg-black fixed h-full w-full opacity-20 "
          onClick={() => {
            setOpen(false);
          }}
        ></div>
      )} */}
       <Sepet open={open} setOpen={setOpen}  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      
      <div className=" m-1 p-1 shadow-md rounded-md  ">
          <div className="w-full flex items-center p-1.5 md:justify-between justify-evenly  ">
            <div className="flex items-center cursor-pointer w-auto pl-8">
              <div className="h-12 w-12 bg-black flex items-center">
                <img className="object-cover" src={Logo} alt="Glamouria" />
              </div>
              <div className="flex flex-col ">
                <h1 className="font-bold text-2xl uppercase pl-2  select-none">
                  Glamouria
                </h1>
                <h1 className="text-[10px] text-end select-none ">
                  Bir Sunay Kuruluşudur.
                </h1>
              </div>
            </div>

            <div onClick={()=>{setMenuOpen(true)}} className="md:hidden" >
              <FiMenu size={30}/>
            </div>

           
            <div className="md:flex hidden bg-slate-100 rounded-md items-center w-[35%] ">
              <input
                type="text"
                placeholder="Aradığınız ürün veya kategori yazınız"
                className="w-full outline-none h-12 p-3 bg-slate-100 rounded-md items-center flex "
              />
              <CiSearch  className="pr-2 size-9 cursor-pointer" />
            </div>
            <div className="md:flex hidden w-[35%]  items-center justify-between ">
              {headerItems.map((i) => (
                <div className=" w-full   flex  items-center justify-between ">
                  <div
                    className=" flex cursor-pointer hover:bg-slate-200 p-2 rounded-md items-center "
                    onClick={() => {
                      i?.onClick?.();
                    }}
                  >
                    {i.icon}
                    <p className="pl-1.5  select-none  ">{i.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};
