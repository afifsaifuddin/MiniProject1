import "./App.css";
import { Write } from "./pages/write";
import { Landing } from "./pages/landing";
import { Route, Routes } from "react-router-dom";
import { Resetpassword } from "./pages/resetpassword";
import { Accountprofile } from "./pages/Accountprofile";

import { Verificationemail } from "./pages/verificationemail";
import { Verified } from "./pages/verified";
import Signin from "./component/signin";
import Signup from "./component/signup";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Auth>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Write" element={<Write />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>

          <Route
            path="/reset-password/:token"
            element={<Resetpassword />}
          ></Route>
          <Route
            path="/verification-change-email/:token"
            element={<Verificationemail />}
          ></Route>

          <Route path="/Accountprofile" element={<Accountprofile />}></Route>
          <Route path="/verification/:token" element={<Verified />}></Route>
        </Routes>
      </Auth>
    </>
  );
}

export default App;
