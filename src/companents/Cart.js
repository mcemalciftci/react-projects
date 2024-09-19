import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Data from "../assets/json/Data.json";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductActions } from "../store/ProductSlice";

export const Cart = () => {
  const items = useSelector(state=>state.product.items)
  console.log(items)
  
  const dispatch = useDispatch()
  const [hover,setHover] = useState(null)
  const addToCart = (d) =>{
    dispatch(ProductActions.productAdd(d))
  }
  return (
    <div className="xl:grid xl:grid-cols-4 xl:gap-y-4 mb-2 overflow-hidden  grid-cols-2  grid gap-4">
      {Data.map((d, index) => (
        
          <Card
            // onPointerEnter={()=>{setHover(index)}}
            // onPointerLeave={()=>{setHover(null)}}
            className="  bg-slate-100 rounded-md md:w-[17rem] hover:scale-105 duration-700 cursor-pointer"
            key={index}
            style={{
                
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Kartı dikey olarak düzenlemek için
                height: "100%", // Kartların yüksekliği aynı olsun
            }}
          >
            
           {/* {hover===index&& <div key={hover}  className="w-[17rem] h-full opacity-20 fixed text-center items-center duration-700 bg-black">
                <button className="bg-white absolute p-2 top-52 rounded-md   text-black">Göz At</button>
           </div>} */}
            <img alt="Sample" className="object-cover h-full" src={d.img} />
            <CardBody className=" px-1 flex flex-col justify-between ">
              <CardTitle className="font-bold" tag="h5"> {d.title}</CardTitle>
              <CardSubtitle className="mb-2 text-sm md:text-lg " tag="h6">
                {d.description}
              </CardSubtitle>
              <div className="flex w-full justify-between md:p-2  p-1.5 items-center">
                <CardText className="font-semibold text-xs md:text-base">
                    {d.price} ₺
                </CardText>
                <button onClick={()=>{addToCart(d)}}  className="bg-blue-300 md:p-1 p-1.5  rounded-md text-xs md:text-base " >Sepete Ekle</button>

              </div>
            </CardBody>
          </Card>
    
      ))}
    </div>
  );
};
