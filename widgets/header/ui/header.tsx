'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
	{ label: 'База знаний', href: '/knowledge' },
	{ label: 'Отзывы', href: '/reviews' },
	{ label: 'Приложение', href: '/app' },
	{ label: 'Вопросы', href: '/faq' },
	{ label: 'О компании', href: '/about' },
	{ label: 'Сравнение', href: '/compare' },
	{ label: 'Блог', href: '/blog' },
]

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='fixed top-0 left-0 right-0 z-50 glass border-b border-white/5'>
			<div className='max-w-7xl mx-auto px-6 py-4'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<Link href='/' className='flex items-center gap-3 group'>
						<div className='relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center animate-gradient shadow-lg group-hover:scale-105 transition-transform duration-300'>
							<span className='text-slate-900 font-bold text-lg'>M</span>
						</div>
						<span className='text-xl font-semibold tracking-tight'>
							<span className='gradient-text'>MIS EGISZ</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center gap-1'>
						{navItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								className='relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 group'
							>
								{item.label}
								<span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full' />
							</Link>
						))}
					</nav>

					{/* CTA Button */}
					<div className='hidden lg:flex items-center gap-4'>
						<Link
							href='/contact'
							className='relative px-6 py-2.5 text-sm font-medium text-slate-900 rounded-full overflow-hidden group'
						>
							<span className='absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient' />
							<span className='absolute inset-0 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							<span className='relative'>Связаться</span>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='lg:hidden relative w-10 h-10 flex items-center justify-center'
						aria-label='Toggle menu'
					>
						<div className='flex flex-col gap-1.5'>
							<span
								className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
									isMenuOpen ? 'rotate-45 translate-y-2' : ''
								}`}
							/>
							<span
								className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
									isMenuOpen ? 'opacity-0' : ''
								}`}
							/>
							<span
								className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
									isMenuOpen ? '-rotate-45 -translate-y-2' : ''
								}`}
							/>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
					isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<nav className='px-6 py-4 border-t border-white/5 flex flex-col gap-2'>
					{navItems.map((item, index) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setIsMenuOpen(false)}
							className='px-4 py-3 text-base font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300'
							style={{ animationDelay: `${index * 50}ms` }}
						>
							{item.label}
						</Link>
					))}
					<Link
						href='/contact'
						onClick={() => setIsMenuOpen(false)}
						className='mt-4 px-4 py-3 text-center text-base font-medium text-slate-900 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-lg animate-gradient'
					>
						Связаться
					</Link>
				</nav>
			</div>
		</header>
	)
}
