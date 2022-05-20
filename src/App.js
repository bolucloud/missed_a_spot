import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopNav";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ReportSpot from "./pages/ReportSpot";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/admin" exact element={<AdminPage />} />
          <Route path="/report" exact element={<ReportSpot />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
