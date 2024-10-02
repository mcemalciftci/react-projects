import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import Logo from "../assets/images/Logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { ProductActions } from "../store/ProductSlice";
export const Sepet = ({ 
  open,
  setOpen = () => {},
  menuOpen, 
  setMenuOpen=()=>{} 
}) => {
  const {items,totalPrice}=useSelector(state=>state.product)
  const dispatch = useDispatch()
  const className = menuOpen ? "right-[0px]" : "-right-[300px]"
  return (
    <>
    {menuOpen&&<div onClick={()=>{setMenuOpen(false)}} className=" md:hidden w-full h-full fixed bg-black opacity-40"></div>}
      <div
        className={`bg-slate-100 h-full w-[300px] fixed z-50 top-0   duration-700 ${
          open ? "right-[0px]" : "-right-[300px]"
        } `}
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

        {items?.length?<ShowSepetItem items={items} toplamFiyat={totalPrice} dispatch={dispatch} />:<NoItem/>}
      </div>

      {open&&<div onClick={()=>{setOpen(false)}} className="  w-full h-full fixed bg-black opacity-40"></div>}      
      <div className={` md:hidden h-full w-[300px] fixed top-0 duration-700 ${className} bg-slate-200`}>
        <div className=" w-full  flex items-center justify-between cursor-pointer p-2 mt-4 border-b-2 border-gray-400">
          <div className="flex">
            <div className="h-14 w-14 flex items-center">
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
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <IoMdClose className="size-10 hover:scale-125 duration-500 " />
          </div>
        </div>

        {items?.length ?<ShowSepetItem items={items} toplamFiyat={totalPrice}/>:<NoItem/>}
      </div>

    </>
  );
};

const NoItem = () =>{

 return <div className="flex w-full h-full">
  <div className="  flex-col w-full  justify-center  mt-10  ">
    <span className="w-full flex justify-center    ">
      <PiShoppingCartLight className="size-16 border-2 rounded-full p-2 border-black  " />
    </span>
    <h1 className="w-full text-center mt-[1rem]">
      Sepetinizde Ürün Bulunmamaktadır.
    </h1>
  </div>
</div>
};

const ShowSepetItem = ({items, toplamFiyat ,dispatch=()=>{}}) =>{
  console.log(toplamFiyat)
  return (
    <div className="w-full h-full p-2 px-4 ">
      <div className="grid grid-cols-1 gap-4 border-b-2 mt-2 border-slate-800 ">
        {items?.map((urun) => (
          <div
            key={urun.id}
            className="flex justify-between items-center mb-4 "
          >
            <div className="flex items-center">
              <img
                src={urun.img}
                alt={urun.title}
                width={50}
                height={50}
                className="rounded-md mr-2 shadow-sm"
              />
              <h1 className="text-base font-medium ">{urun.title}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-white border border-gray-300 rounded-md py-1 px-2 hover:bg-gray-100 active:bg-gray-200" onClick={()=>{dispatch(ProductActions.productMinus(urun.id))}}>
                <Minus className="h-4 w-4" />
              </button>
              <span>{urun.quantity}</span>
              <button className="bg-white border border-gray-300 rounded-md py-1 px-2 hover:bg-gray-100 active:bg-gray-200" onClick={()=>{dispatch(ProductActions.productAdd(urun))}} >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-lg mt-3 font-semibold">
            <span>Toplam:</span>
            <span>{toplamFiyat.toFixed(2)} TL</span>
      </div>
          <Button className="w-full mt-4 bg-black text-white p-2 rounded-md hover:opacity-90 ">Siparişi Tamamla</Button>
    </div>
  );
}