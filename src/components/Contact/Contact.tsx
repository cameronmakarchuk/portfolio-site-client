import './Contact.scss';
import { Mail, MapPin, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
	const FS_KEY = import.meta.env.VITE_FORMSPREE_CONTACT_KEY;

	if (!FS_KEY) {
		throw new Error('Missing Formspree contact form key');
	}

	const [state, handleFormspreeSubmit] = useForm(FS_KEY);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;

		try {
			await handleFormspreeSubmit(e);
		} catch {
			// TODO: add better error handling, validation here
			console.error('Error submitting form');
		} finally {
			form.reset();
		}
	};

	return (
		<section id='contact' className='contact'>
			<div className='contact__container'>
				<div className='contact__header'>
					<h2 className='section-title'>Get In Touch</h2>
				</div>

				<div className='contact__grid'>
					<div className='contact__info'>
						<div className='contact__info-box'>
							<div className='contact__info-glow' />
							<div className='contact__info-content'>
								<h3 className='contact__info-title'>Let's Build Something Amazing</h3>
								<p className='contact__info-description'>
									I'm always interested in hearing about new projects and opportunities. Whether you
									have a question or just want to say hi, feel free to reach out!
								</p>

								<div className='contact__details'>
									<div className='contact__detail'>
										<div className='contact__detail-icon-box'>
											<Mail className='contact__detail-icon' />
										</div>
										<span>hello@cameronmakarchuk.com</span>
									</div>
									<div className='contact__detail'>
										<div className='contact__detail-icon-box'>
											<MapPin className='contact__detail-icon' />
										</div>
										<span>Toronto, ON</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='contact__form'>
						<div className='contact__form-glow' />
						<form className='contact__form-box' onSubmit={handleSubmit}>
							<div className='contact__form-group'>
								<label htmlFor='name' className='contact__label'>
									Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									className='contact__input'
									placeholder='Your name'
								/>
								<ValidationError prefix='Name' field='name' errors={state.errors} />
							</div>

							<div className='contact__form-group'>
								<label htmlFor='email' className='contact__label'>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									className='contact__input'
									placeholder='your@email.com'
								/>
								<ValidationError prefix='Email' field='email' errors={state.errors} />
							</div>

							<div className='contact__form-group'>
								<label htmlFor='message' className='contact__label'>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									rows={4}
									className='contact__textarea'
									placeholder='Your message...'
								/>
								<ValidationError prefix='Message' field='message' errors={state.errors} />
							</div>

							<button type='submit' className='contact__submit' disabled={state.submitting}>
								{state.succeeded ? (
									<span>Thanks, your message has been sent!</span>
								) : (
									<span>
										Send Message
										<Send className='contact__submit-icon' />
									</span>
								)}
							</button>
						</form>
					</div>
				</div>

				<div className='contact__footer'>
					<div className='contact__footer-glow' />
					<div className='contact__footer-box'>
						<p className='contact__footer-text'>
							© 2025 Cameron Makarchuk. Hand-coded with{' '}
							<span className='contact__footer-highlight'>React, Typescript</span> and{' '}
							<span className='contact__footer-highlight'>passion</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
