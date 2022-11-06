import React, { useEffect, useState} from "react"
import { Header } from "./components"
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Subjects from "./pages/Subjects";
import { ManageAccountModel } from "./components/ManageAccountModel";

function App() {
  const [show, setShow] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (window) {
      if (window.matchMedia("(max-width: 991px)").matches) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    }
  }, [window]);

  return (
    <div>
      <Header handleShow={handleShow} showMobile={showMobile} />
      <div className="container-fluid mt-3">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">
              <Routes>
                <Route exact path="/dashboard" element={'Home'} />
                <Route exact path="/classes" element={'Classes'} />
                <Route exact path="/subjects" element={'Subjects'} />
                <Route exact path="/results" element={'Results'}/>
              </Routes></h1>
          </div>
        </div>
        <hr className="border-primary" />
      </div>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard showMobile={showMobile} />} />
        <Route exact path="/classes" element={<Classes />} />
        <Route exact path="/subjects" element={<Subjects />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ManageAccountModel show={show} setShow={setShow} />
    </div>
  )
}

export default App
