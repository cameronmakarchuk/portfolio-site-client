import { useState } from 'react';
import { ContactDialog } from './ContactDialog';
import './ContactPrompt.scss';

type ContactPromptProps = {
	size: 'large' | 'regular';
};

export function ContactPrompt({ size }: ContactPromptProps): JSX.Element {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<div className={`contact-prompt contact-prompt--${size}`}>
			<span className='contact-prompt__question'>Hiring, or need something built?</span>
			<button type='button' className='contact-prompt__action' onClick={() => setIsDialogOpen(true)}>
				Write to me →
			</button>
			<ContactDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
		</div>
	);
}
