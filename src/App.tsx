import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
	return (
		<div>
			<div
				style={{
					backgroundImage: "url(/images/backgrounnd.png)",
				}}
			>
				<Nav />
				<Hero />
			</div>
			<Footer />
		</div>
	);
}

export default App;
