import Navbar from "../components/Navbar";
import { Outlet,useMatch} from "react-router-dom";
import "../index.css";
import Discover from "./Discover";
import Footer from "../components/Footer";

function App() {
  const isHomePage = useMatch({path:"/",end:true});
  return (
    <div className="flex flex-col h-screen ">     
      <Navbar />
      <main className="flex-1 bg-red-300">
       {isHomePage ? (
         <Discover />
       ):(
        <Outlet />
       )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
