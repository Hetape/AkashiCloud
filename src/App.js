import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Landing } from './Component/Landing';
import { ThemeProvider } from "./ThemeContext";
function App() {
  
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar/>
        <Landing/>
      </div>
    </ThemeProvider>
  );
}

export default App;
