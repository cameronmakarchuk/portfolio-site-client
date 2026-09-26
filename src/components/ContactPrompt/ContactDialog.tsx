import { type FormEvent, useState } from 'react';
import { useModalDialog } from '../../hooks/useModalDialog';

const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/mldqpvjd';

type ContactDialogProps = {
	isOpen: boolean;
	onClose: () => void;
};

type SubmissionStatus = 'idle' | 'submitting' | 'sent' | 'failed';

export function ContactDialog({ isOpen, onClose }: ContactDialogProps): JSX.Element {
	const { dialogRef, handleBackdropClick } = useModalDialog(isOpen, onClose);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click is a mouse shortcut; keyboard users close with Escape or the close button.
		<dialog
			ref={dialogRef}
			className='contact-dialog'
			aria-labelledby='contact-dialog-title'
			onClose={onClose}
			onClick={handleBackdropClick}
		>
			{isOpen && <ContactForm onClose={onClose} />}
		</dialog>
	);
}

function ContactForm({ onClose }: { onClose: () => void }): JSX.Element {
	const [status, setStatus] = useState<SubmissionStatus>('idle');

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		setStatus('submitting');

		try {
			const response = await fetch(CONTACT_FORM_ENDPOINT, {
				method: 'POST',
				body: new FormData(form),
				headers: {
					Accept: 'application/json',
				},
			});

			setStatus(response.ok ? 'sent' : 'failed');
		} catch {
			setStatus('failed');
		}
	};

	return (
		<div className='contact-dialog__panel'>
			<div className='contact-dialog__header'>
				<h2 id='contact-dialog-title' className='contact-dialog__title'>
					Write to me
				</h2>
				<button
					type='button'
					className='contact-dialog__close'
					aria-label='Close contact form'
					onClick={onClose}
				>
					×
				</button>
			</div>

			{status === 'sent' ? (
				<p className='contact-dialog__confirmation'>
					Thanks, your message is on its way. I'll be in touch soon.
				</p>
			) : (
				<form className='contact-dialog__form' onSubmit={handleSubmit}>
					<label className='contact-dialog__field'>
						Name
						<input name='name' type='text' autoComplete='name' required />
					</label>
					<label className='contact-dialog__field'>
						Email
						<input name='email' type='email' autoComplete='email' required />
					</label>
					<label className='contact-dialog__field'>
						Message
						<textarea name='message' rows={5} required />
					</label>
					{status === 'failed' && (
						<p className='contact-dialog__error' role='alert'>
							Something went sideways. Please try again.
						</p>
					)}
					<button type='submit' className='contact-dialog__submit' disabled={status === 'submitting'}>
						{status === 'submitting' ? 'Sending…' : 'Send message'}
					</button>
				</form>
			)}
		</div>
	);
}
