// import logo from "../images/Stellar Craftz.png"
import "../styles/Navbar.css"
import logo from "../Stellar-Craftz.png"

const Navbar = () => {
   return (
      <div className="Navbar">
         <img className="Navbar-logo" src={logo} alt="website logo" />
      </div>
   )
}

export default Navbar;