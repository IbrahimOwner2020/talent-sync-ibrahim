import SectionWrapper from "./SectionWrapper";

const feaures = [
	"30 days free trial",
	"Cancel at any time",
	"Access to all features",
	"Personalized onboarding",
];

const Features = () => {
	return (
		<div className="relative pb-36 pt-8 overflow-hidden">
			<SectionWrapper>
				<div className="grid grid-cols-2">
					<div className="max-w-[590px]">
						<h1 className="text-[#101828] font-semibold text-5xl mt-3 mb-4">
							Ready to clear the path to perfect communication?
						</h1>
						<div className="my-8 ml-6 space-y-4">
							{feaures.map((feature, index) => (
								<div key={index} className="flex items-center">
									<div className="mr-2">
										<img
											className="w-6 h-auto"
											src="/images/check-icon.png"
											alt="check icon"
										/>
									</div>
									<p className="text-[#475467] text-2xl">
										{feature}
									</p>
								</div>
							))}
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
									Start your free trial
								</a>
							</div>
						</div>
					</div>
					<div className="">
                        <div className="absolute top-0 left-1/2">
                            <img src="/images/mockupFeatures.png" className="aspect-[1024/760]" alt="feature" />
                        </div>
                    </div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Features;
