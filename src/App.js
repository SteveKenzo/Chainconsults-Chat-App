import Home from "./Page/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatList/:Id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
