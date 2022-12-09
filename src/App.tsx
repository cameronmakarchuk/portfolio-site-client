import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectRecLeague from "./components/ProjectRecLeague/ProjectRecLeague";
import ProjectBrainStorm from "./components/ProjectBrainStorm/ProjectBrainStorm";
import CallToAction from "./components/CallToAction/CallToAction";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<ProjectPage />}>
          <Route path="/projects/recleague" element={<ProjectRecLeague />} />
          <Route path="/projects/brainstorm" element={<ProjectBrainStorm />} />
        </Route>
      </Routes>
      <CallToAction />
    </BrowserRouter>
  );
}

export default App;
