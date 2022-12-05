
import Home from "./mycomponents/Home";
import Chat from "./mycomponents/Chat";
import NotFound from "./mycomponents/notfound";

import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {

  return (
<>
    <br />
    <h2 className="text-center text-light">Unique Chat App - Chat App of Future</h2>
    <br />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
</>
  );
}

export default App;
