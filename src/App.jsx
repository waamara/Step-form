import Header from "./components/Header";
import Stepone from "./components/Stepone";
import Steptwo from "./components/Steptwo"; 
import Stepthree from "./components/Stepthree"; 
import Stepfour from "./components/Stepfour"; 
import Stepfive from "./components/Stepfive"; 
import Button from "./components/button";



export default function App() {
  return (
    <div className="flex flex-col md:flex md:flex-row ">
      <Header />
      <div>
        <Stepone/>
      </div> 
      <Button/>
    </div>
  );
}
