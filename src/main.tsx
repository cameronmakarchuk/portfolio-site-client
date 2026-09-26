import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { App } from './App';
import { AboutPage } from './pages/About/AboutPage';
import { HomePage } from './pages/Home/HomePage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { ProjectPage } from './pages/Project/ProjectPage';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'projects/:slug', element: <ProjectPage /> },
			{ path: 'about', element: <AboutPage /> },
			{ path: '*', element: <NotFoundPage /> },
		],
	},
]);

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Missing #root element in index.html');
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
