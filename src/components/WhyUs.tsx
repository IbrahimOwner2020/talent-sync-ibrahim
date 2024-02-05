import SectionWrapper from "./SectionWrapper";

const whyUsData = [
	{
		title: "Crystal-clear HD video",
		description:
			"No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
		icon: "/images/videoIcon.png",
	},
	{
		title: "Noise-canceling audio",
		description:
			"Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
		icon: "/images/zapIcon.png",
	},
	{
		title: "Scheduling made easy",
		description:
			"Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
		icon: "/images/calanderIcon.png",
	},
	{
		title: "Bank-grade security",
		description:
			"Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
		icon: "/images/lockIcon.png",
	},
];

const WhyUs = () => {
	return (
		<SectionWrapper>
			<div className="py-28">
				<div>
					<h3 className="text-[#175CD3] text-base sm:text-lg font-semibold">
						The ClearLink Advantage
					</h3>
					<h1 className="text-[#1D2939] font-semibold text-4xl sm:text-5xl mt-3 mb-4">
						Why choose ClearLink?
					</h1>
					<p className="max-w-[842px] text-[#667085] text-xl sm:text-2xl">
						In a world where connection is everything, ClearLink
						takes the lead. Our cutting-edge video conferencing app
						offers:
					</p>
				</div>
				<div className="grid lg:grid-cols-2 gap-8 xl:flex items-center py-16">
					<div className="grid sm:grid-cols-2 gap-10 max-w-[800px]">
						{whyUsData.map((data, index) => (
							<div
								key={index}
								className="flex flex-col items-start max-w-[330px]"
							>
								<div className="bg-[#F9FAFB] border border-[#EAECF0] p-4 rounded-full mb-4">
									<img
										className="w-5 h-auto"
										src={data.icon}
										alt={data.title}
									/>
								</div>
								<div>
									<h3 className="text-[#101828] text-xl xl:text-2xl font-semibold mb-3">
										{data.title}
									</h3>
									<p className="text-[#475467] text-lg">
										{data.description}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className="flex lg:items-end relative justify-center mt-28 lg:mt-0 lg:justify-end flex-1">
                        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4">
                            <img src="/images/hand-drawn-arrow.png" alt="arrow" />
                        </div>
						<img src="/images/whyUsImage.png" alt="why us image" />
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default WhyUs;
