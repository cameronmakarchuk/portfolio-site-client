import type { ReactNode } from 'react';
import './SplitLayout.scss';

type SplitLayoutProps = {
	aside: ReactNode;
	children: ReactNode;
	variant: 'home' | 'page';
};

export function SplitLayout({ aside, children, variant }: SplitLayoutProps): JSX.Element {
	return (
		<div className={`split-layout split-layout--${variant}`}>
			<aside className='split-layout__aside'>{aside}</aside>
			<main className='split-layout__main'>{children}</main>
		</div>
	);
}
