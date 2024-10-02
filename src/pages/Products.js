import { Cart } from "../companents/Cart"

export const Products = ( ) =>{
    return <div className=" p-2 h-auto md:flex md:p-0 -z-1">
        <div className="basis-1/5 "> 
        
        
        </div>
        <div className="basis-4/5 pt-4">
               <div>
                    <Cart/>
               </div>

        </div>
    </div>
}