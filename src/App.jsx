import Header from "./components/Header";
import Stepone from "./components/Stepone";
import Steptwo from "./components/Steptwo"; 
import Stepthree from "./components/Stepthree";



export default function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div style={{ position: "absolute" ,top:"0", marginTop:"60px", left: "0", width: "100%" }}>
        <Stepthree/>
      </div>
    </div>
  );
}
