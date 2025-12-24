import Image from 'next/image'
import Link from 'next/link'

const features = [
	{
		icon: (
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M13 10V3L4 14h7v7l9-11h-7z'
				/>
			</svg>
		),
		title: 'Молниеносная скорость',
		description: 'Оптимизированная производительность для мгновенного отклика',
	},
	{
		icon: (
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
				/>
			</svg>
		),
		title: 'Безопасность данных',
		description: 'Шифрование и защита на всех уровнях системы',
	},
	{
		icon: (
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
				/>
			</svg>
		),
		title: 'Онлайн документы',
		description: 'Все что нужно находится в программе',
	},
	{
		icon: (
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
				/>
			</svg>
		),
		title: 'Командная работа',
		description: 'Инструменты для эффективного взаимодействия',
	},
]

const stats = [
	{ value: 'Подключение', label: 'Онлайн кассы' },
	{ value: 'Современное', label: 'Рабочее место' },
	{ value: '24/7', label: 'Поддержка' },
	{ value: 'Удобная', label: 'Интеграция' },
]

export default function Home() {
	return (
		<main className='flex-1'>
			{/* Hero Section */}
			<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
				{/* Background Effects */}
				<div className='absolute inset-0'>
					<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] animate-pulse' />
					<div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-[100px] animate-pulse delay-1000' />
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]' />
				</div>

				{/* Grid Pattern */}
				<div
					className='absolute inset-0 opacity-20'
					style={{
						backgroundImage: `linear-gradient(rgba(62, 180, 137, 0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(62, 180, 137, 0.1) 1px, transparent 1px)`,
						backgroundSize: '50px 50px',
					}}
				/>

				<div className='relative max-w-7xl mx-auto px-6 py-32'>
					{/* Hero Content Grid */}
					<div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
						{/* Left Side - Text Content */}
						<div className='text-center lg:text-left'>
							{/* Main Heading */}
							<h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up'>
								<span className='block text-white'>Управляйте</span>
								<span className='block gradient-text'>клиникой легко</span>
							</h1>

							{/* Subtitle */}
							<p className='text-lg md:text-xl text-zinc-400 max-w-xl mb-10 animate-fade-in-up delay-100'>
								Современная платформа для автоматизации процессов стоматологий.
								Экономьте время, увеличивайте прибыль, масштабируйтесь без
								границ.
							</p>

							{/* CTA Buttons */}
							<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up delay-150'>
								<Link
									href='/start'
									className='group relative px-8 py-4 text-lg font-semibold text-slate-900 rounded-full overflow-hidden'
								>
									<span className='absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient' />
									<span className='absolute inset-0 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									<span className='relative flex items-center gap-2'>
										Начать бесплатно
										<svg
											className='w-5 h-5 group-hover:translate-x-1 transition-transform'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M13 7l5 5m0 0l-5 5m5-5H6'
											/>
										</svg>
									</span>
								</Link>
								<Link
									href='/demo'
									className='px-8 py-4 text-lg font-semibold text-white rounded-full border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-2'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M8 5v14l11-7z' />
									</svg>
									Смотреть демо
								</Link>
							</div>
						</div>

						{/* Right Side - Demo Image */}
						<div className='relative animate-fade-in-up delay-200'>
							{/* Glow background */}
							<div className='absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl scale-110 animate-pulse' />

							{/* Image container */}
							<div className='relative group'>
								{/* Border glow effect */}
								<div className='absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl opacity-30 group-hover:opacity-50 blur-sm transition-opacity duration-500 animate-gradient' />

								{/* Glass card */}
								<div className='relative glass rounded-3xl p-2 border border-white/10 overflow-hidden animate-float'>
									{/* Reflection effect */}
									<div className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none' />

									<Image
										src='/demo.png'
										alt='Демо платформы'
										width={600}
										height={400}
										className='rounded-2xl shadow-2xl w-full h-auto'
									/>

									{/* Bottom fade */}
									<div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#161b22]/80 to-transparent rounded-b-3xl pointer-events-none' />
								</div>
							</div>
						</div>
					</div>

					{/* Stats */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up delay-300'>
						{stats.map(stat => (
							<div key={stat.label} className='text-center'>
								<div className='text-2xl md:text-4xl font-bold gradient-text mb-2'>
									{stat.value}
								</div>
								<div className='text-sm text-zinc-500'>{stat.label}</div>
							</div>
						))}
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
					<svg
						className='w-6 h-6 text-emerald-500/50'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 14l-7 7m0 0l-7-7m7 7V3'
						/>
					</svg>
				</div>
			</section>

			{/* Features Section */}
			<section className='relative py-32 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent' />

				<div className='relative max-w-7xl mx-auto px-6'>
					{/* Section Header */}
					<div className='text-center mb-20'>
						<span className='inline-block px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm text-emerald-400 mb-6'>
							Возможности
						</span>
						<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
							Всё, что нужно для <span className='gradient-text'>успеха</span>
						</h2>
						<p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
							Полный набор инструментов для управления и развития вашей стоматологии
						</p>
					</div>

					{/* Features Grid */}
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{features.map((feature, index) => (
							<div
								key={feature.title}
								className='group relative p-8 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all duration-500'
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{/* Glow Effect */}
								<div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

								<div className='relative'>
									<div className='w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300'>
										{feature.icon}
									</div>
									<h3 className='text-xl font-semibold text-white mb-3'>
										{feature.title}
									</h3>
									<p className='text-zinc-500 leading-relaxed'>
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='relative py-32'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='relative overflow-hidden rounded-3xl'>
						{/* Background */}
						<div className='absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 animate-gradient' />
						<div className='absolute inset-0 opacity-30'>
							<div
								className='absolute inset-0'
								style={{
									backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
									backgroundSize: '32px 32px',
								}}
							/>
						</div>

						<div className='relative px-8 py-20 md:px-16 md:py-24 text-center'>
							<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
								Готовы начать?
							</h2>
							<p className='text-lg text-white/80 max-w-2xl mx-auto mb-10'>
								Присоединяйтесь к тысячам компаний, которые уже используют нашу
								платформу для роста своего бизнеса
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Link
									href='/start'
									className='px-8 py-4 text-lg font-semibold bg-white text-emerald-600 rounded-full hover:bg-white/90 transition-colors duration-300'
								>
									Попробовать бесплатно
								</Link>
								<Link
									href='/contact'
									className='px-8 py-4 text-lg font-semibold text-white rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors duration-300'
								>
									Связаться с нами
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
