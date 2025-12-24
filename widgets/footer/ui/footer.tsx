import Link from 'next/link'

const footerLinks = {
	product: {
		title: 'Продукт',
		links: [
			{ label: 'База знаний', href: '/knowledge' },
			{ label: 'Мобильное приложение', href: '/app' },
			{ label: 'Сравнение', href: '/compare' },
			{ label: 'Цены', href: '/pricing' },
		],
	},
	company: {
		title: 'Компания',
		links: [
			{ label: 'О нас', href: '/about' },
			{ label: 'Блог', href: '/blog' },
			{ label: 'Карьера', href: '/careers' },
			{ label: 'Контакты', href: '/contact' },
		],
	},
	support: {
		title: 'Поддержка',
		links: [
			{ label: 'Вопросы', href: '/faq' },
			{ label: 'Отзывы', href: '/reviews' },
			{ label: 'Документация', href: '/docs' },
			{ label: 'API', href: '/api' },
		],
	},
	legal: {
		title: 'Юридическая информация',
		links: [
			{ label: 'Политика конфиденциальности', href: '/privacy' },
			{ label: 'Условия использования', href: '/terms' },
			{ label: 'Cookies', href: '/cookies' },
		],
	},
}

const socialLinks = [
	{
		label: 'Telegram',
		href: 'https://t.me/',
		icon: (
			<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
				<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
			</svg>
		),
	},
	{
		label: 'VK',
		href: 'https://vk.com/',
		icon: (
			<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
				<path d='M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.713-1.033-1.004-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.562c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.684 4 8.177c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.457-.085.694-.576.694z' />
			</svg>
		),
	},
	{
		label: 'YouTube',
		href: 'https://youtube.com/',
		icon: (
			<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
				<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
			</svg>
		),
	},
	{
		label: 'GitHub',
		href: 'https://github.com/',
		icon: (
			<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
				<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
			</svg>
		),
	},
]

export function Footer() {
	return (
		<footer className='mt-auto border-t border-white/5 bg-[#0d1117]'>
			{/* Main Footer */}
			<div className='max-w-7xl mx-auto px-6 py-16'>
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12'>
					{/* Brand Column */}
					<div className='col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0'>
						<Link href='/' className='flex items-center gap-3 mb-6'>
							<div className='w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center animate-gradient'>
								<span className='text-slate-900 font-bold text-lg'>M</span>
							</div>
							<span className='text-xl font-semibold'>
								<span className='gradient-text'>MIS</span>
							</span>
						</Link>
						<p className='text-zinc-500 text-sm leading-relaxed mb-6'>
							Современные решения для вашего бизнеса. Упрощаем сложное, делаем
							возможным невозможное.
						</p>
						{/* Social Links */}
						<div className='flex gap-3'>
							{socialLinks.map(social => (
								<a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className='w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-500 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300'
									aria-label={social.label}
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					{/* Links Columns */}
					{Object.values(footerLinks).map(section => (
						<div key={section.title}>
							<h3 className='font-semibold text-white mb-4 text-sm'>
								{section.title}
							</h3>
							<ul className='space-y-3'>
								{section.links.map(link => (
									<li key={link.href}>
										<Link
											href={link.href}
											className='text-zinc-500 hover:text-emerald-400 text-sm transition-colors duration-300'
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='border-t border-white/5'>
				<div className='max-w-7xl mx-auto px-6 py-6'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p className='text-zinc-600 text-sm'>
							© {new Date().getFullYear()} MIS. Все права защищены.
						</p>
						<div className='flex items-center gap-2 text-zinc-600 text-sm'>
							<span>Сделано с</span>
							<span className='text-emerald-400 animate-pulse'>♥</span>
							<span>в России</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
