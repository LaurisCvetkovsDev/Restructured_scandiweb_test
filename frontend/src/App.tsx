import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "nes.css/css/nes.min.css";
import Layout from "./Layout";
import Form from "./pages/Form";
import Grid from "./pages/Grid";

const App: React.FC = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col">
            <Router>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Grid />} />
                  <Route path="/Form" element={<Form />} />
                </Route>
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
