
import './App.css';
import Navbar from './Components/navbar';

import {Routes,Route} from "react-router-dom";
import {Home} from "./Components/home";
import {About} from "./Components/about";

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
</Routes>
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
     </Routes>
    </>
  );
}

export default App;
