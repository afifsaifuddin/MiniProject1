import "./App.css";
import Resetpassword from "./pages/resetpassword";
import { Write } from "./pages/write";
import { Landing } from "./pages/landing";
import { Route, Routes } from "react-router-dom";

import { Accountprofile } from "./pages/Accountprofile";

import { Verified } from "./pages/verified";
import Signin from "./component/signin";
import Signup from "./component/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Write" element={<Write />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Resetpassword" element={<Resetpassword />}></Route>
        <Route path="/Accountprofile" element={<Accountprofile />}></Route>
        <Route path="/verification/:token" element={<Verified />}></Route>
      </Routes>
    </div>
  );
}

export default App;
