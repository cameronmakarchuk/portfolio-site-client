import React from "react";
import { Outlet } from "react-router-dom";

export default function ProjectPage(): JSX.Element {
  return (
    <section className="project-page">
      {/* BUILD PROJECTS NAV BAR THAT CAN BE CLICKED TO DISPLAY EACH PROJECT BELOW */}

      <Outlet />
    </section>
  );
}
