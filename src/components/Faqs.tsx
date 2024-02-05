import SectionWrapper from "./SectionWrapper";
import { useState } from "react";

const faqsData = [
	{
		qestion: "How many participants can join a ClearLink video conference?",
		answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
	},
	{
		qestion: "Can I use ClearLink on multiple devices?",
		answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
	},
	{
		qestion:
			"Is ClearLink compatible with other video conferencing platforms?",
		answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
	},
	{
		qestion:
			"How does ClearLink ensure the security of my video conferences?",
		answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
	},
	{
		qestion: "Do I need to download any software to use ClearLink?",
		answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
	},
	{
		qestion: "What kind of customer support does ClearLink provide?",
		answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
	},
];

const Faqs = () => {
	const [selected, setSelected] = useState(0);

	return (
		<SectionWrapper>
			<div className="grid lg:grid-cols-2 gap-12 lg:flex items-start justify-between py-28">
				<div>
					<div className="max-w-[547px]">
						<h3 className="text-[#175CD3] text-base sm:text-lg font-semibold">
							Support
						</h3>
						<h1 className="text-[#1D2939] font-semibold text-4xl sm:text-5xl mt-3 mb-4">
							FAQs
						</h1>
						<p className="max-w-[842px] text-[#667085] text-xl sm:text-2xl">
							Everything you need to know about the product and
							billing. Can’t find the answer you’re looking for?
							Please chat to our friendly team.
						</p>
					</div>
				</div>
				<div>
					<div className="grid max-w-[765px] divide-y divide-[#EAECF0]">
						{faqsData.map((data, index) => (
							<div
								key={index}
								className={`flex flex-col p-8 items-start cursor-pointer ${
									index === selected
										? "bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl"
										: ""
								}`}
								onClick={() =>
									setSelected(index === selected ? -1 : index)
								}
							>
								<div className="flex items-start justify-between w-full mb-3">
									<h3 className="text-[#101828] text-base sm:text-xl font-semibold mt-1">
										{data.qestion}
									</h3>
									<div className="ml-2 mt-2 w-5 h-5">
										{selected === index ? (
											<img
												src="/images/minus-icon.png"
												alt="minus icon"
											/>
										) : (
											<img
												src="/images/plus-icon.png"
												alt="plus icon"
											/>
										)}
									</div>
								</div>
								{selected === index && (
									<p className="text-[#475467] text-sm sm:text-lg">
										{data.answer}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Faqs;
