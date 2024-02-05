import SectionWrapper from "./SectionWrapper";
import { Fragment, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Dialog, Transition } from "@headlessui/react";

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
	const [open, setOpen] = useState(false);

	return (
		<SectionWrapper>
			<div className="pt-8 lg:pt-12">
				<nav className="flex items-center justify-between py-3 px-8 bg-[#F2F4F7] border border-[#D0D5DD] rounded-full">
					<div>
						<img
							className="lg:w-[120px] xl:w-[152px] h-auto"
							src="/images/logo.png"
							alt="logo"
						/>
					</div>
					<div className="hidden lg:inline-block">
						<ul className="flex items-center space-x-12">
							{links.map((link) => (
								<li
									key={link.name}
									className="flex items-center space-x-2"
								>
									<a
										href={link.url}
										className="text-[#667085] text-base xl:text-lg font-semibold"
									>
										{link.name}
									</a>
									{link.down && (
										<img
											src="/images/chevron-down.png"
											alt="down arrow"
										/>
									)}
								</li>
							))}
						</ul>
					</div>
					<div className="hidden lg:flex items-center space-x-2">
						<div>
							<a
								href="/"
								className="text-[#101828] font-semibold inline-block bg-white border border-[#98A2B3] rounded-full py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base"
							>
								Talk to sales
							</a>
						</div>
						<div>
							<a
								href="/"
								className="text-white font-semibold inline-block bg-[#175CD3] border border-[#175CD3] rounded-full py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base"
							>
								Sign up for free
							</a>
						</div>
					</div>
					<div className="flex items-center justify-center lg:hidden">
						<button onClick={() => setOpen(true)}>
							<IoMenu className="text-[#101828] w-6 h-6" />
						</button>
					</div>
				</nav>
				<Transition.Root show={open} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-10"
						onClose={setOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="ease-in-out duration-500"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in-out duration-500"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						<div className="fixed inset-0 overflow-hidden">
							<div className="absolute inset-0 overflow-hidden">
								<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
									<Transition.Child
										as={Fragment}
										enter="transform transition ease-in-out duration-500 sm:duration-700"
										enterFrom="translate-x-full"
										enterTo="translate-x-0"
										leave="transform transition ease-in-out duration-500 sm:duration-700"
										leaveFrom="translate-x-0"
										leaveTo="translate-x-full"
									>
										<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
											<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
												<div className="px-4 sm:px-6">
													<div className="flex items-start justify-between">
														<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
															<img
																className="lg:w-[120px] xl:w-[152px] h-auto"
																src="/images/logo.png"
																alt="logo"
															/>
														</Dialog.Title>
														<div className="ml-3 flex h-7 items-center">
															<button
																type="button"
																className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
																onClick={() =>
																	setOpen(
																		false
																	)
																}
															>
																<span className="absolute -inset-2.5" />
																<span className="sr-only">
																	Close panel
																</span>
																<IoClose
																	className="h-6 w-6"
																	aria-hidden="true"
																/>
															</button>
														</div>
													</div>
												</div>
												<div className="relative mt-6 flex-1 px-4 sm:px-12">
													<div className="inline-block">
														<ul className="flex flex-col items-start space-y-4">
															{links.map(
																(link) => (
																	<li
																		key={
																			link.name
																		}
																		className="flex items-center space-x-2"
																	>
																		<a
																			href={
																				link.url
																			}
																			className="text-[#667085] text-base xl:text-lg font-semibold"
																		>
																			{
																				link.name
																			}
																		</a>
																		{link.down && (
																			<img
																				src="/images/chevron-down.png"
																				alt="down arrow"
																			/>
																		)}
																	</li>
																)
															)}
														</ul>
													</div>
													<div className="flex flex-col items-start space-y-4 mt-8">
														<div>
															<a
																href="/"
																className="text-[#101828] font-semibold inline-block bg-white border border-[#98A2B3] rounded-full py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base"
															>
																Talk to sales
															</a>
														</div>
														<div>
															<a
																href="/"
																className="text-white font-semibold inline-block bg-[#175CD3] border border-[#175CD3] rounded-full py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base"
															>
																Sign up for free
															</a>
														</div>
													</div>
												</div>
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</div>
					</Dialog>
				</Transition.Root>
			</div>
		</SectionWrapper>
	);
};

export default Nav;
