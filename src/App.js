import Header from './components/Header';
import Main from './components/Main';
import Mugs from './components/Mugs';
import mugData from "./mugData";
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
//   const items = mugData.map(item => {
//      return <Card 
//                key={item.id}
//                img={item.img}
//                name={item.name}
//                price={item.price}
//             />
//   })
  return (
    <div className="App">
      <BrowserRouter>
         <Header />
         <Main />
         <div className='App-container'>
            <Mugs />
         </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
