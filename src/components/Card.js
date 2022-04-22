import "../styles/Card.css"

const Card = (props) => {
   return (
      <div className="Card">
         <div className="Card-container">
            <img className="Card-image" src={props.img} alt="item image"/>
            <div className="Card-info">
               <h3>{props.name}</h3>
               <p>Price: ${props.price}</p>
            </div>
         </div>
         
      </div>
   )
}

export default Card;