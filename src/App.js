import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Dashboard } from './Component/Dashboard';
import {Landing} from './Component/Landing'
import { ThemeProvider } from "./ThemeContext";
function App() {
  
  return (
    <ThemeProvider>
      <div className="App">
        {/* <Navbar/>
        <Dashboard/> */}
        <Landing/>
      </div>
    </ThemeProvider>
  );
}

export default App;
