import logo from './logo.png'
import Menus from './views/Menus'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menus />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
     Airbean Coffee Shop
      </header>
    </div>
  );
}

export default App
