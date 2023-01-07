import { Inter } from '@next/font/google'
import NextHead from '@components/NextHead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<NextHead title="Homepage" metaDescription="Homepage" />
			<main className={inter.className}>Chat - NextJS App</main>
		</>
	)
}
