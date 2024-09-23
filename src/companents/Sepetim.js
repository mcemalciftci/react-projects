import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import Logo from "../assets/images/Logo.jpg";
import { useSelector } from "react-redux";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
export const Sepet = ({ 
  open,
  setOpen = () => {},
  menuOpen, 
  setMenuOpen=()=>{} 
}) => {
  const {items,totalPrice}=useSelector(state=>state.product)
 
  const className = menuOpen ? "right-[0px]" : "-right-[300px]"
  return (
    <>
    {menuOpen&&<div onClick={()=>{setMenuOpen(false)}} className=" md:hidden w-full h-full fixed bg-black opacity-20"></div>}
      <div
        className={`bg-slate-100 h-full w-[300px] fixed top-0   duration-700 ${
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

        {items?.length?<ShowSepetItem/>:<NoItem/>}
      </div>

      <div className={` md:hidden h-full w-[300px] fixed top-0 duration-700 ${className} bg-slate-200`}>
        <div className="md:hidden w-full  flex items-center justify-between cursor-pointer p-2 mt-4 border-b-2 border-gray-500">
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

        {items?.length ?<ShowSepetItem/>:<NoItem/>}
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

const ShowSepetItem = () =>{
  return <div className="mt-2">
    <Card className="p-2"> 
      <CardBody className="flex flex-row">
        <CardImg src="https://picsum.photos/80/80"/>
         
        <CardText className="flex flex-col pl-2">
        <CardTitle>
          <h1>ssss</h1>
        </CardTitle>
        <CardTitle>
          ssss
        </CardTitle>
        <CardTitle>
          ssss
        </CardTitle>
        </CardText>
      </CardBody>
    </Card>
  </div>
}