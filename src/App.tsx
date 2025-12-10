import './styles/global.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';

function App() {
	return (
		<div>
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
