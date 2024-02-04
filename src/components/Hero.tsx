import SectionWrapper from "./SectionWrapper";

const Hero = () => {
	return (
		<SectionWrapper>
			<div className="flex items-center pt-40 pb-28">
				<div className="max-w-[780px] space-y-12">
					<div>
						<h1 className="font-semibold text-[64px] leading-[72px]">
							Uniting the world, <br /> one video call at a time
						</h1>
						<p className="text-2xl text-[#667085] mt-4">
							Experience the future of communication with
							ClearLink – where crystal-clear video conferencing
							meets unparalleled simplicity.
						</p>
					</div>
					<div className="flex items-center">
						<a
							href="#"
							className="bg-[#175CD3] px-7 py-4 rounded-full text-white text-lg font-semibold"
						>
							Start your free trial
						</a>
						<a
							className="flex items-center px-7 space-x-4 ml-4 rounded-full text-[#175CD3] text-lg font-semibold"
							href="#"
						>
							<img
								src="/images/aiLogo.png"
								className="w-5 h-auto"
								alt="aiIcon"
							/>
							<p>Discover AI assistance</p>
						</a>
					</div>
					<div className="flex items-center space-x-4">
						<div>
							<div className="isolate flex -space-x-2 overflow-hidden">
								<img
									className="relative z-30 inline-block h-12 w-12 rounded-full ring-2 ring-white"
									src="/images/avatar1.png"
									alt=""
								/>
								<img
									className="relative z-30 inline-block h-12 w-12 rounded-full ring-2 ring-white"
									src="/images/avatar2.png"
									alt=""
								/>
								<img
									className="relative z-30 inline-block h-12 w-12 rounded-full ring-2 ring-white"
									src="/images/avatar3.png"
									alt=""
								/>
								<img
									className="relative z-30 inline-block h-12 w-12 rounded-full ring-2 ring-white"
									src="/images/avatar4.png"
									alt=""
								/>
								<img
									className="relative z-30 inline-block h-12 w-12 rounded-full ring-2 ring-white"
									src="/images/avatar5.png"
									alt=""
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center space-x-1">
								<div className="flex items-center h-5">
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
								<p className="mt-1 text-[#344054] font-semibold">
									5.0
								</p>
							</div>
							<p className="text-[#475467] font-medium">
								from 3,000+ reviews
							</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center flex-1  ">
					<img
						src="/images/heroImg.png"
						className="w-[584px] h-auto"
						alt="Hero"
					/>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Hero;
