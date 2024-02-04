import SectionWrapper from "./SectionWrapper";

const links = [
	{
		name: "Product",
		url: "/",
		down: true,
	},
	{
		name: "Solutions",
		url: "/",
		down: true,
	},
	{
		name: "Resources",
		url: "/",
		down: true,
	},
	{
		name: "Pricing",
		url: "/",
		down: false,
	},
];

const Nav = () => {
	return (
		<SectionWrapper>
			<div className="pt-12">
				<nav className="flex items-center justify-between py-3 px-8 bg-[#F2F4F7] border border-[#D0D5DD] rounded-full">
					<div>
						<img
							className="w-[152px] h-auto"
							src="/images/logo.png"
							alt="logo"
						/>
					</div>
					<div>
						<ul className="flex items-center space-x-12">
							{links.map((link) => (
								<li key={link.name} className="flex items-center space-x-2">
									<a
										href={link.url}
										className="text-[#667085] text-lg font-semibold"
									>
										{link.name}
									</a>
                                    {link.down && (
                                        <img src="/images/chevron-down.png" alt="down arrow" />
                                    )}
								</li>
							))}
						</ul>
					</div>
					<div className="flex items-center space-x-2">
						<div>
							<a
								href="/"
								className="text-[#101828] font-semibold inline-block bg-white border border-[#98A2B3] rounded-full py-3 px-6"
							>
								Talk to sales
							</a>
						</div>
						<div>
							<a
								href="/"
								className="text-white font-semibold inline-block bg-[#175CD3] border border-[#175CD3] rounded-full py-3 px-6"
							>
								Sign up for free
							</a>
						</div>
					</div>
				</nav>
			</div>
		</SectionWrapper>
	);
};

export default Nav;
