// import logo from "../images/Stellar Craftz.png"
import "../styles/Navbar.css"
import logo from "../images/Stellar-Craftz.png"
const Navbar = () => {
   return (
      <div className="Navbar">
         <img className="Navbar-logo" src={logo} alt="website logo" />
         <ul>
            <li>3D Art</li>
            <li>Mugs</li>
            <li>Spotify Frames</li>
         </ul>
      </div>
   )
}

export default Navbar;