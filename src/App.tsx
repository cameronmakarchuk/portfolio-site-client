import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallToAction from "./components/CallToAction/CallToAction";
import PageHeader from "./components/PageHeader/PageHeader";
import PageHeader2 from "./components/PageHeader/PageHeader2";
import ProjectBrainStorm from "./components/ProjectBrainStorm/ProjectBrainStorm";
import ProjectRecLeague from "./components/ProjectRecLeague/ProjectRecLeague";
import { Provider } from "./components/ui/provider";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import { system } from "./utils/theme/theme";

function App() {
	return (
		<BrowserRouter>
			<Provider>
				<PageHeader2 />
				<PageHeader />
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="/projects" element={<ProjectPage />}>
						<Route path="/projects/recleague" element={<ProjectRecLeague />} />
						<Route
							path="/projects/brainstorm"
							element={<ProjectBrainStorm />}
						/>
					</Route>

					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
				<CallToAction />
			</Provider>
		</BrowserRouter>
	);
}

export default App;
