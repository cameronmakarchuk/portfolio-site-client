// import './App.scss';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CallToAction from './components/CallToAction/CallToAction';
// import PageHeader from './components/Header/Header';
// import ProjectBrainStorm from './components/Projects/BrainStorm/BrainStorm';
// import ProjectRecLeague from './components/Projects/RecLeague/RecLeague';
// import AboutPage from './pages/About/About';
// import ContactPage from './pages/Contact/Contact';
// import HomePage from './pages/Home/Home';
// import ProjectPage from './pages/Projects/Projects';

// function App() {
// 	return (
// 		<BrowserRouter>
// 			<PageHeader />
// 			<Routes>
// 				<Route path='/' element={<HomePage />} />
//
// 				<Route path='/projects' element={<ProjectPage />}>
// 					<Route path='/projects/recleague' element={<ProjectRecLeague />} />
// 					<Route path='/projects/brainstorm' element={<ProjectBrainStorm />} />
// 				</Route>
//
// 				<Route path='/about' element={<AboutPage />} />
// 				<Route path='/contact' element={<ContactPage />} />
// 			</Routes>
// 			<CallToAction />
// 		</BrowserRouter>
// 	);
// }

import './styles/global.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects_new';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';

function App() {
	return (
		<div>
			{/* <div className='min-h-screen bg-slate-900 relative overflow-x-hidden'> */}
			{/* 	<div className='fixed inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 pointer-events-none' /> */}
			{/* 	<div className='fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent pointer-events-none' /> */}
			{/* 	<div className='fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none' /> */}
			{/**/}
			<Navigation />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
