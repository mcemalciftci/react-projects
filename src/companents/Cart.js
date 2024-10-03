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
import { useNavigate } from "react-router";

export const Cart = () => {
  const items = useSelector(state=>state.product.items)
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [hover,setHover] = useState(null)
  const addToCart = (d) =>{
    dispatch(ProductActions.productAdd(d))
  }
  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };
  const goToProductDetail = (title,data) => {
    const formattedTitle = formatTitle(title);
    navigate(`/${formattedTitle}`, {state:data});
  };
  return (
    <div className="xl:grid xl:grid-cols-4 xl:gap-y-4 mb-2 overflow-hidden  grid-cols-2  grid gap-4">
      {Data.map((d, index) => (
        
          <Card
            // onPointerEnter={()=>{setHover(index)}}
            // onPointerLeave={()=>{setHover(null)}}
          
            className="  bg-slate-100 rounded-md md:w-[15rem]  relative cursor-pointer"
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
            <CardBody className=" px-1 flex flex-col justify-between "   onClick={()=>{ goToProductDetail(d.title,d)}}>
            <div className="p-2">
              <img alt="Sample" className="object-cover h-full hover:scale-105 duration-700" src={d.img} />
            </div>
              <CardTitle className="font-bold" tag="h5"> {d.title}</CardTitle>
              <CardSubtitle className=" text-sm md:text-sm " tag="h6" 
              style={{
                overflow: "hidden",       // Yazı taşmasını gizle
                textOverflow: "ellipsis", // Uzun yazılarda üç nokta (...) ekler
                WebkitLineClamp: 3,             // Gösterilecek maksimum satır sayısı (3 satır)
                WebkitBoxOrient: "vertical",    // Tek satırda kalmasını sağlar
              }}>
                {d.description}
              </CardSubtitle>
            </CardBody>
              <div className="flex w-full justify-between  p-1.5 items-center ">
                <CardText className="font-semibold text-xs md:text-base ">
                    {d.price} ₺
                </CardText>
                <button onClick={()=>{addToCart(d)}}  className="bg-blue-300 md:p-1 p-1.5  rounded-md text-xs md:text-base  hover:opacity-85 " >Sepete Ekle</button>

              </div>
          </Card>
    
      ))}
    </div>
  );
};
