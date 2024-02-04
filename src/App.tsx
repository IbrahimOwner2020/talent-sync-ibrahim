import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Partners from "./components/Partners";

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
			<Partners />
			<Footer />
		</div>
	);
}

export default App;
