import './Contact.scss';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
										<span>hello@developer.com</span>
									</div>
									<div className='contact__detail'>
										<div className='contact__detail-icon-box'>
											<MapPin className='contact__detail-icon' />
										</div>
										<span>San Francisco, CA</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='contact__form'>
						<div className='contact__form-glow' />
						<form className='contact__form-box'>
							<div className='contact__form-group'>
								<label htmlFor='name' className='contact__label'>
									Name
								</label>
								<input type='text' id='name' className='contact__input' placeholder='Your name' />
							</div>

							<div className='contact__form-group'>
								<label htmlFor='email' className='contact__label'>
									Email
								</label>
								<input
									type='email'
									id='email'
									className='contact__input'
									placeholder='your@email.com'
								/>
							</div>

							<div className='contact__form-group'>
								<label htmlFor='message' className='contact__label'>
									Message
								</label>
								<textarea
									id='message'
									rows={4}
									className='contact__textarea'
									placeholder='Your message...'
								/>
							</div>

							<button type='submit' className='contact__submit'>
								<span>
									Send Message
									<Send className='contact__submit-icon' />
								</span>
							</button>
						</form>
					</div>
				</div>

				<div className='contact__footer'>
					<div className='contact__footer-glow' />
					<div className='contact__footer-box'>
						<p className='contact__footer-text'>
							© 2025 DevPortfolio. Built with <span className='contact__footer-highlight'>React</span> and{' '}
							<span className='contact__footer-highlight'>passion</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
