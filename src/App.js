
import Home from "./mycomponents/home";
import Chat from "./mycomponents/chat";
import NotFound from "./mycomponents/notfound";
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
function App() {
 
  return (
  
      <Router>
        <Routes>
          <Route exact path="/u-chat" element={<Home/>}/>
          <Route exact path="/u-chat/" element={<Home/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
     
  
  );
}

export default App;
