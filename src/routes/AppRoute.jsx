import { BrowserRouter , Routes , Route} from  "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Service";
import Ourclients from "../pages/Ourclients";
import Testimonials from "../pages/Testimonials";
import Contactus from "../pages/Contactus";






const AppRoute = () => {
    return(
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Ourclients" element={<Ourclients/>}/>
            <Route path="/Testimonials" element={<Testimonials/>}/>
            <Route path="/Contactus" element={<Contactus/>}/>
         
         
           </Routes>
        </BrowserRouter>
    );
}
export default AppRoute;