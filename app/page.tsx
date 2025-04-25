export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 text-center">
			<img src="/logo.png" alt="Black Tie Logo" className="w-32 mb-6" />
			<h1 className="text-4xl font-bold">🚧 We're Getting Ready!</h1>
			<p className="text-purple-400 mt-4 text-lg">
				Our new site is coming soon. Stay tuned for something amazing.
			</p>

			<a
				href="https://blacktieevents-demo-nermeennasims-projects.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm transition duration-200">
				View Work-in-Progress Website
			</a>

			<footer className="absolute bottom-6 text-gray-500 text-sm">
				<div className="text-xs text-gray-400 text-center">
					&copy; {new Date().getFullYear()} Black Tie Events. All rights
					reserved.
				</div>
			</footer>
		</main>
	);
}
