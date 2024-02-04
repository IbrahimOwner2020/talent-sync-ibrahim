import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Partners from "./components/Partners";
import WhyUs from "./components/WhyUs";

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
			<WhyUs />
			<Features />
			<Footer />
		</div>
	);
}

export default App;
