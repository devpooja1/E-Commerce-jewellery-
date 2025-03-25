import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/Admin";
import InsertProduct from "./pages/Insert";
import JewelryTable from "./pages/Display";
import Update from "./pages/Update";
import EditData from "./pages/editData";
import Search from "./pages/search";
import HighProduct from "./pages/highProduct";
import LoginSystem from "./pages/Login";
import ResetPassword from "./pages/ResetPass";



const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="high" element={<HighProduct/>}/>
      <Route path="loginsystem" element={<LoginSystem/>}/>   
      </Route>
      <Route path="dashboard" element={<Dashboard/>}>
      <Route path="admin" element={<Admin/>}/>
      <Route path="insert" element={<InsertProduct/>}/>
      <Route path="display" element={<JewelryTable/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="editdata/:id" element={<EditData/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="resetpass" element={<ResetPassword/>}/>
      
    
      
      </Route>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}
export default App;