import SectionWrapper from "./SectionWrapper";

const Shopify = () => {
	return (
		<div className="bg-[#F9FAFB] py-28">
			<SectionWrapper>
				<div className="grid lg:grid-cols-2 gap-8">
					<div>
						<div>
							<img
								src="/images/shopify-svg.png"
								className="w-[112px]"
								alt="partner"
							/>
						</div>
						<div className="flex items-center h-5 space-x-2 my-8">
							<img
								src="/images/starIcon.png"
								className="w-5 h-auto"
								alt="Hero"
							/>
							<img
								src="/images/starIcon.png"
								className="w-5 h-auto"
								alt="Hero"
							/>
							<img
								src="/images/starIcon.png"
								className="w-5 h-auto"
								alt="Hero"
							/>
							<img
								src="/images/starIcon.png"
								className="w-5 h-auto"
								alt="Hero"
							/>
							<img
								src="/images/starIcon.png"
								className="w-5 h-auto"
								alt="Hero"
							/>
						</div>
						<h1 className="text-[#101828] text-3xl sm:text-4xl xl:text-[44px] xl:leading-[60px] max-w-[600px] font-medium my-12">
							ClearLink has upgraded our remote meetings.
							High-quality video, screen sharing, and top-notch
							security make it essential for our team.
						</h1>
						<div>
							<div className="flex items-center space-x-6 mt-8">
								<div>
									<img
										src="/images/sara.png"
										className="w-[56px] h-[56px] rounded-full ring-2 ring-white"
										alt="avatar"
									/>
								</div>
								<div className="flex-1">
									<p className="text-[#101828] font-semibold text-lg sm:text-xl">
										Sarah Thompson
									</p>
									<p className="text-[#475467] text-base sm:text-lg">
										Project Manager, Shopify
									</p>
								</div>
								<div className="flex items-center space-x-4">
									<button className="bg-[#FFFFFFE5] border border-[#D1E9FF] rounded-full p-3 sm:p-6">
										<img
											src="/images/left-arrow.png"
											className="w-3 sm:w-4 h-auto"
											alt="arrow left"
										/>
									</button>
									<button className="bg-[#FFFFFFE5] border border-[#D1E9FF] rounded-full p-3 sm:p-6">
										<img
											src="/images/right-arrow.png"
											className="w-3 sm:w-4 h-auto"
											alt="arrow right"
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden lg:inline-block">
						<div>
							<img
								src="/images/grid-images.png"
								className="aspect-[1024/760] w-[50vw]"
								alt="shopify"
							/>
						</div>
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Shopify;
