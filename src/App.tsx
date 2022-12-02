import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectRecLeague from "./components/ProjectRecLeague/ProjectRecLeague";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<ProjectPage />}>
          <Route path="/projects/recleague" element={<ProjectRecLeague />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
