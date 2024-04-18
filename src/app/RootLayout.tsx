import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
	title: 'VesselTrace - Premier Vessel Tracking Solution',
	description: 'VesselTrace is a leading platform for tracking the movement of vessels, providing fast, accurate, and reliable solutions.',
	applicationName: 'VesselTrace',
	authors: [{ name: 'Fian Rahardian' }],
	generator: 'Next.js',
	keywords: ['vessel tracking', 'maritime', 'tracking solution'],
	referrer: 'origin',
	themeColor: '#000000',
	colorScheme: 'dark',
	viewport: 'width=device-width, initial-scale=1',
	creator: 'Fian Rahardian',
	publisher: 'Fian Rahardian',
	robots: 'index, follow',
	abstract: 'VesselTrace is the go-to solution for vessel tracking, providing real-time data and advanced analytics.',
	category: 'Maritime',
	classification: 'Tracking Solution',
};

// const gilroy = localFont({
// 	src: './public/fonts/SVNGilroy-Bold.otf',
// });
// console.log('gilroy', gilroy);

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={`font-gilroy`}>{children}</body>
		</html>
	);
};

export default RootLayout;
