import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/images/Logo.jpg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";

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
    <div className=" overflow-hidden">
      {open && (
        <div
          className="bg-black fixed h-full w-full opacity-20 "
          onClick={() => {
            setOpen(false);
          }}
        ></div>
      )}
      
        <div
          className={`bg-slate-100 h-full w-[300px] fixed top-0   duration-700 ${
            open ? "right-[0px]" : "-right-[300px]"
          }  `}
        >
          <div className="flex w-full items-center justify-between mt-2 p-2.5 border-b-2 border-gray-400 ">
            <h1 className="text-lg font-semibold">Sepetim</h1>
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              
              <IoMdClose className="size-8 hover:scale-125 duration-500 " />
            </button>
          </div>

          <div className="flex w-full h-full">
            <div className="  flex-col w-full  justify-center  mt-10  ">
                <span className="w-full flex justify-center    "><PiShoppingCartLight className="size-16 border-2 rounded-full p-2 border-black  " /></span>
                <h1 className="w-full text-center mt-[1rem]">Sepetinizde Ürün Bulunmamaktadır.</h1>
            </div>
          </div>
          
        </div>
        
          {menuOpen&&<div onClick={()=>{setMenuOpen(false)}} className=" md:hidden w-full h-full fixed bg-black opacity-50"></div>}
      <div className=" m-1 p-2 shadow-md rounded-md">
        <div className="h-24  space-y-4 ">
          {/* <div className="w-full bg-white  " >sadsad</div> */}
          <div className="w-full flex items-center p-2 md:justify-evenly justify-between ">
            <div className="flex items-center cursor-pointer">
              <div className="h-20 w-20 bg-black flex items-center">
                <img className="object-cover" src={Logo} alt="Glamouria" />
              </div>
              <div className="flex flex-col ">
                <h1 className="font-bold text-3xl uppercase pl-4  select-none">
                  Glamouria
                </h1>
                <h1 className="text-xs text-end select-none ">
                  Bir Sunay Kuruluşudur.
                </h1>
              </div>
            </div>

            <div onClick={()=>{setMenuOpen(true)}} className="md:hidden" >
              <FiMenu size={30}/>
            </div>

            <div className={` md:hidden h-full w-[300px] fixed top-0 duration-700 ${className} bg-slate-200`} >
              <div className="md:hidden w-full  flex items-center justify-between cursor-pointer p-2 mt-4 border-b-2 border-gray-500">
                <div className="flex">
                  <div className="h-14 w-14 bg-black flex items-center">
                    <img className="object-cover  " src={Logo} alt="Glamouria" />
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="font-bold text-2xl uppercase pl-4  select-none">
                      Glamouria
                    </h1>
                    <p className="text-xs text-end select-none ">
                      Bir Sunay Kuruluşudur.
                    </p>
                  </div>
                </div>
                <div onClick={()=>{setMenuOpen(false)}}>
                  <IoMdClose className="size-10 hover:scale-125 duration-500 " />

                </div>
              </div>
            </div>
            <div className="md:flex hidden bg-slate-100 rounded-md items-center w-[35%] ">
              <input
                type="text"
                placeholder="Aradığınız ürün veya kategori yazınız"
                className="w-full outline-none h-12 p-3 bg-slate-100 rounded-md items-center flex "
              />
              <CiSearch className="pr-2 size-9" />
            </div>
            <div className="md:flex hidden w-[28%]  items-center justify-between ">
              {headerItems.map((i) => (
                <div className=" w-full  flex  items-center ">
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
    </div>
  );
};
