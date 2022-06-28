// import logo from "../images/Stellar Craftz.png"
import "../styles/Header.css"
import logo from "../Stellar-Craftz.png"

const Header = () => {
   return (
      <div className="Header">
         <img className="Header-logo" src={logo} alt="website logo" />
      </div>
   )
}

export default Header;