import NextUIProvider from './NextUIProvider';
import RootLayout from './RootLayout';

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<RootLayout>
			<NextUIProvider>{children}</NextUIProvider>
		</RootLayout>
	);
}
