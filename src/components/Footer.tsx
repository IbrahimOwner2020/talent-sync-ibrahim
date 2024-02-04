import SectionWrapper from "./SectionWrapper";

const footerLinks = [
	{
		title: "Product",
		links: [
			{ name: "Overview", url: "#" },
			{ name: "Features", url: "#" },
			{ name: "Solutions", url: "#" },
			{ name: "Tutorials", url: "#" },
			{ name: "Pricing", url: "#" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About us", url: "#" },
			{ name: "Careers", url: "#" },
			{ name: "Press", url: "#" },
			{ name: "News", url: "#" },
			{ name: "Contact", url: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Blog", url: "#" },
			{ name: "Events", url: "#" },
			{ name: "Help Center", url: "#" },
			{ name: "Tutorials", url: "#" },
			{ name: "Support", url: "#" },
		],
	},
	{
		title: "Legal",
		links: [
			{ name: "Terms", url: "#" },
			{ name: "Privacy", url: "#" },
			{ name: "Cookies", url: "#" },
			{ name: "Licenses", url: "#" },
			{ name: "Contact", url: "#" },
		],
	},
];

const Footer = () => {
	return (
		<div>
			<div>
				<SectionWrapper>
					<div>
						<div className="mt-28 mb-12 flex items-start justify-between">
							<div className="max-w-[400px] mr-20">
								<img
									className="w-[152px] h-auto"
									src="/images/logo.png"
									alt="logo"
								/>
								<p className="mt-6 text-lg text-[#475467]">
									ClearLink is your gateway to effortless,
									high-quality video conferencing. Join us in
									shaping <br />
									the future of communication!
								</p>
							</div>
							<div className="grid grid-cols-5 gap-8 flex-1">
								{footerLinks.map((section) => (
									<div key={section.title}>
										<h3 className="font-semibold text-[#667085] mb-2">
											{section.title}
										</h3>
										<ul>
											{section.links.map((link) => (
												<li key={link.name}>
													<a
														href={link.url}
														className="text-[#475467] text-lg font-semibold block mb-2"
													>
														{link.name}
													</a>
												</li>
											))}
										</ul>
									</div>
								))}
								<div>
									<h3 className="font-semibold text-[#004EEB] mb-2">
										Get the app
									</h3>
									<div className="space-y-4">
										<a href="#">
											<img
												className="w-[135] h-auto mb-4"
												src="/images/appStoreLogo.png"
												alt="app store"
											/>
										</a>
										<a href="#">
											<img
												className="w-[135] h-auto"
												src="/images/googlePlayLogo.png"
												alt="google play"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SectionWrapper>
			</div>
			<div className="bg-[#F9FAFB] py-8">
				<SectionWrapper>
					<div className="flex items-center justify-between">
						<p className="text-[#667085]">
							© 2023 ClearLink. All rights reserved.
						</p>
						<div className="">
							<ul className="flex items-center space-x-8">
								<li>
									<a href="#">
										<img
											src="/images/linkedin.png"
											alt="social media icons"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="/images/twitter.png"
											alt="social media icons"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="/images/facebook.png"
											alt="social media icons"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="/images/intergram.png"
											alt="social media icons"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="/images/github.png"
											alt="social media icons"
										/>
									</a>
								</li>
								<li>
									<a href="#">
										<img
											src="/images/youtube.png"
											alt="social media icons"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</SectionWrapper>
			</div>
		</div>
	);
};

export default Footer;
