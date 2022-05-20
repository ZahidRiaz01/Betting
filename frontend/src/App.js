import React from "react";

import "./App.css";
import CronJob from "./cronJob/cronJob";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App d-flex align-items-center">
      <ToastContainer/>
      <CronJob />
    </div>
  );
}

export default App;
