import { Outlet, ScrollRestoration } from 'react-router';
import './App.scss';

export function App(): JSX.Element {
	return (
		<>
			<ScrollRestoration />
			<Outlet />
		</>
	);
}
