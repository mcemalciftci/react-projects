import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Data from "../assets/json/Data.json";
export const Cart = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-y-4 mb-2 overflow-hidden  grid-cols-2  grid gap-4">
      {Data.map((d, index) => (
        
          <Card
            className="  bg-slate-100 rounded-md"
            key={index}
            style={{
                
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Kartı dikey olarak düzenlemek için
                height: "100%", // Kartların yüksekliği aynı olsun
            }}
          >
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
                <button  className="bg-blue-300 md:p-1 p-1.5  rounded-md text-xs md:text-base " >Sepete Ekle</button>

              </div>
            </CardBody>
          </Card>
    
      ))}
    </div>
  );
};
