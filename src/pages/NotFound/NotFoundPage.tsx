import { Link } from 'react-router';
import { PageAside } from '../../components/PageAside/PageAside';
import { SplitLayout } from '../../components/SplitLayout/SplitLayout';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export function NotFoundPage(): JSX.Element {
	useDocumentTitle('Page not found');

	return (
		<SplitLayout
			variant='page'
			aside={
				<PageAside
					eyebrow='404'
					title='Nothing logged here.'
					lede="This page doesn't exist, or it moved."
					facts={[]}
				/>
			}
		>
			<Link to='/'>← Back to the homepage</Link>
		</SplitLayout>
	);
}
