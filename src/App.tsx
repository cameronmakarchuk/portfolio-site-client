import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import HomePage from "./pages/HomePage/HomePage";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<Projects />}>
          {/* <Route path="/projects/recleague" element={<RecLeague />} */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
