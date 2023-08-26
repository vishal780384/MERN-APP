import './App.css';
import home_img from './home-img.png';
import Navbar from './Component/Navbar';

function App() {
  
  return (
    <>
    <Navbar/>
    <div className="App">
          <img style={{width:"100%",height:"auto" }} src={home_img} alt="Homeimage"/>
    </div>
    </>
  );
}

export default App;
