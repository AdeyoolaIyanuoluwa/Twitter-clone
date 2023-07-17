import { BrowserRouter } from "react-router-dom";
import Mainpage from "./container/MainPage/mainpage";



function App() {
  return (
    <div>
      <BrowserRouter>
            <Mainpage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
