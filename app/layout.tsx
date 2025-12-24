import { Footer } from '@/widgets/footer/ui/footer'
import { Header } from '@/widgets/header/ui/header'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'MIS — Управляйте бизнесом легко',
	description:
		'Современная платформа для автоматизации бизнес-процессов. Экономьте время, увеличивайте прибыль, масштабируйтесь без границ.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body className='antialiased flex flex-col min-h-screen'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
