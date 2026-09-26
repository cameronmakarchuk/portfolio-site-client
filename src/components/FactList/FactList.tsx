import type { ReactNode } from 'react';
import './FactList.scss';

export type Fact = {
	label: string;
	value: ReactNode;
};

type FactListProps = {
	facts: Fact[];
};

export function FactList({ facts }: FactListProps): JSX.Element {
	return (
		<dl className='fact-list'>
			{facts.map((fact) => (
				<div className='fact-list__row' key={fact.label}>
					<dt className='fact-list__label'>{fact.label}</dt>
					<dd className='fact-list__value'>{fact.value}</dd>
				</div>
			))}
		</dl>
	);
}
