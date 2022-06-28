import "../styles/Main.css"
import { NavLink } from "react-router-dom";

const Main = () => {
   return (
      <main className="Main">
         <section className="Main-section">
            <NavLink exact to="/mugs">Mugs</NavLink>
            <NavLink exact to="/3dart">Shadow-box Art</NavLink>
            <NavLink exact to="/spotify-frames">Spotify Frames</NavLink>
            <NavLink exact to="/custom-form">Customize your product</NavLink>
         </section>
      </main>
   )
}

export default Main;