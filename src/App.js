import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Landing } from './Component/Landing';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
