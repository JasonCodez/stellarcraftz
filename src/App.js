import Navbar from './components/Navbar';
import Card from "./components/Card";
import data from "./itemData";
import './App.css';

function App() {
  const items = data.map(item => {
     return <Card 
               key={item.id}
               img={item.img}
               name={item.name}
               price={item.price}
            />
  })
  return (
    <div className="App">
      <Navbar />
      <div className='App-container'>
         {items}
      </div>
      
    </div>
  );
}

export default App;
