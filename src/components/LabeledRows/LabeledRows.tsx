import type { ReactNode } from 'react';
import './LabeledRows.scss';

type LabeledRowsProps = {
	children: ReactNode;
	density: 'compact' | 'relaxed';
	hasBottomRule?: boolean;
};

type LabeledRowProps = {
	label: string;
	children: ReactNode;
	isPivot?: boolean;
};

export function LabeledRows({ children, density, hasBottomRule = false }: LabeledRowsProps): JSX.Element {
	const bottomRuleClass = hasBottomRule ? 'labeled-rows--bottom-rule' : '';

	return <div className={`labeled-rows labeled-rows--${density} ${bottomRuleClass}`}>{children}</div>;
}

export function LabeledRow({ label, children, isPivot = false }: LabeledRowProps): JSX.Element {
	const pivotClass = isPivot ? 'labeled-row__label--pivot' : '';

	return (
		<div className='labeled-row'>
			<span className={`labeled-row__label ${pivotClass}`}>{label}</span>
			<div className='labeled-row__content'>{children}</div>
		</div>
	);
}
