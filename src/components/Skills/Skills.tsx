import './Skills.scss';

export default function Skills() {
	const skillCategories = [
		{
			category: 'Frontend',
			skills: [
				{ name: 'React', level: 95 },
				{ name: 'TypeScript', level: 90 },
				{ name: 'Sass', level: 92 },
				{ name: 'Next.js', level: 88 },
			],
		},
		{
			category: 'Backend',
			skills: [
				{ name: 'Node.js', level: 90 },
				{ name: 'Python', level: 85 },
				{ name: 'PostgreSQL', level: 87 },
				{ name: 'Redis', level: 82 },
			],
		},
		{
			category: 'Tools & Others',
			skills: [
				{ name: 'Git', level: 93 },
				{ name: 'Docker', level: 86 },
				{ name: 'AWS', level: 84 },
				{ name: 'GraphQL', level: 88 },
			],
		},
	];

	return (
		<section id='skills' className='skills'>
			<div className='skills__container'>
				<div className='skills__header'>
					<h2 className='section-title'>Skills & Expertise</h2>
				</div>

				<div className='skills__grid'>
					{skillCategories.map(({ category, skills }) => (
						<div key={category} className='skills__category'>
							<h3 className='skills__category-title'>{category}</h3>

							<div className='skills__list'>
								{skills.map(({ name, level }) => (
									<div key={name} className='skills__item'>
										<div className='skills__item-header'>
											<span className='skills__item-name'>{name}</span>
											<span className='skills__item-level'>{level}%</span>
										</div>
										<div className='skills__progress'>
											<div className='skills__progress-bar' style={{ width: `${level}%` }} />
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div className='skills__footer'>
					<div className='skills__footer-glow' />
					<div className='skills__footer-box'>
						<p className='skills__footer-text'>
							Always learning, always growing. Currently exploring{' '}
							<span className='skills__footer-highlight'>Web3, AI, and Cloud Architecture</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
