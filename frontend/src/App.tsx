import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "nes.css/css/nes.min.css";
import Layout from "./Layout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./Pages/Form";
import Grid from "./Pages/Grid";

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
