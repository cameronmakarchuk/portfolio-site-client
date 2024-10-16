import './CallToAction.scss';

export default function CallToAction(): JSX.Element {
	return (
		<section className='cta'>
			<h2 className='cta__title'>
				Need some help bringing an exciting project to life?
			</h2>
			<p className='cta__description'>
				Send me a message and{' '}
				<a
					href='https://linkedin.com/in/cameronmakarchuk'
					rel='noreferrer'
					target='_blank'
					className='cta__message-link'
				>
					let's chat.
				</a>
			</p>
		</section>
	);
}
