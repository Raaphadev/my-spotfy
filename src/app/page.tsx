import { Footer } from "./Components/Footer";
import { Sidebar } from "./Components/Sidebar";
import { Body } from "./Components/Body";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <Body/>
      </div>
      <Footer/>
    </div>
    
   
  );
}
