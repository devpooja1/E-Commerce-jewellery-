import {Outlet} from "react-router-dom"
import Header from "./component/Header";
import TopNevbar from "./component/TopNavbar";
import Footer from "./component/Footer";


const Layout=()=>{
    return(
        <>
        <Header/>
        <TopNevbar/>
     
       <Outlet/>
       
        <Footer/>
         </>
    )
}
export default Layout;