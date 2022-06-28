import mugData from "../mugData";
import Card from "./Card";

const Mugs = () => {
   const items = mugData.map(item => {
      return <Card 
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
             />
   })
   return (
      <>
         {items}
      </>
   )
}

export default Mugs;