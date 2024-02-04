import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
	return (
		<div>
			<div
				style={{
					backgroundImage: "url(/images/backgrounnd.png)",
				}}
			>
				<Hero />
			</div>
			<Footer />
		</div>
	);
}

export default App;
