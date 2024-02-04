import SectionWrapper from "./SectionWrapper";

const Partners = () => {
	return (
		<SectionWrapper>
			<div className="py-20">
				<h3 className="text-[#475467] text-center text-xl font-medium">
					Join 1,500+ companies already video conferencing the
					ClearLink way
				</h3>
				<div className="flex items-center justify-between mt-16">
					<img src="/images/shopify-svg.png" alt="partner" />
					<img src="/images/coinbase.png" alt="partner" />
					<img src="/images/dropbox.png" alt="partner" />
					<img src="/images/Intercom.png" alt="partner" />
					<img src="/images/marvel.png" alt="partner" />
					<img src="/images/automattic.png" alt="partner" />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Partners;
