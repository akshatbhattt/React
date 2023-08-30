import "./App.css";
import Bconnect from "./Components/Bconnect";
//import Board from './Components/Board'
// import Home from './Components/Home'
// import Form from './Components/form'
import Carform from "./Components/Carform";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Update_car from "./Components/Update_car";


function App() {
  return (
    <>

     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Bconnect/>}/>
      <Route path="/update/:id" element={<Update_car/>}/>
      <Route path="/form" element={<Carform/>}/>
     </Routes>
     </BrowserRouter>

      {/* <Bconnect/>
      <Carform/>
      <Home />
      <Form /> */}
    </>
  );
}

export default App;