import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallToAction from "./components/CallToAction/CallToAction";
import PageHeader from "./components/Header/Header";
import ProjectBrainStorm from "./components/Projects/BrainStorm/BrainStorm";
import ProjectRecLeague from "./components/Projects/RecLeague/RecLeague";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import HomePage from "./pages/Home/Home";
import ProjectPage from "./pages/Projects/Projects";

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

				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
			<CallToAction />
		</BrowserRouter>
	);
}

export default App;
