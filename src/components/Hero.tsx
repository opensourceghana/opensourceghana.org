import { Button } from "@/components/ui/button";
import { Code, Github, Heart, Users } from "lucide-react";

export function Hero() {
	return (
		<section id="home" className="relative py-20 lg:py-32">
			<div className="container mx-auto max-w-6xl px-4">
				<div className="text-center">
					{/* Hero Title */}
					<h1 className="mb-6 font-bold text-4xl text-[#1E1E1E] leading-tight md:text-5xl lg:text-6xl">
						Building Africa's{" "}
						<span className="text-[#0A84FF]">Open Source</span> Future —{" "}
						<span className="text-[#FF3B30]">Together</span>
					</h1>

					{/* Hero Subtitle */}
					<p className="mx-auto mb-8 max-w-3xl text-[#6B7280] text-lg leading-relaxed md:text-xl">
						Join Ghana's vibrant community of developers, designers, and tech
						enthusiasts building innovative open source solutions that empower
						our continent and beyond.
					</p>

					{/* CTA Buttons */}
					<div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
						<Button
							size="lg"
							className="rounded-lg bg-[#FF3B30] px-8 py-3 font-semibold text-lg text-white transition-all duration-200 hover:bg-[#E12A1F] hover:shadow-lg"
						>
							Join the Movement
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="rounded-lg border-[#0A84FF] px-8 py-3 font-semibold text-[#0A84FF] text-lg transition-all duration-200 hover:bg-[#0A84FF] hover:text-white"
						>
							View Projects
						</Button>
					</div>

					{/* Stats */}
					<div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
						<div className="text-center">
							<div className="mb-2 flex justify-center">
								<Users className="h-8 w-8 text-[#0A84FF]" />
							</div>
							<div className="mb-1 font-bold text-2xl text-[#1E1E1E] md:text-3xl">
								500+
							</div>
							<div className="text-[#6B7280] text-sm">Community Members</div>
						</div>
						<div className="text-center">
							<div className="mb-2 flex justify-center">
								<Code className="h-8 w-8 text-[#0A84FF]" />
							</div>
							<div className="mb-1 font-bold text-2xl text-[#1E1E1E] md:text-3xl">
								50+
							</div>
							<div className="text-[#6B7280] text-sm">Open Source Projects</div>
						</div>
						<div className="text-center">
							<div className="mb-2 flex justify-center">
								<Github className="h-8 w-8 text-[#0A84FF]" />
							</div>
							<div className="mb-1 font-bold text-2xl text-[#1E1E1E] md:text-3xl">
								1000+
							</div>
							<div className="text-[#6B7280] text-sm">GitHub Contributions</div>
						</div>
						<div className="text-center">
							<div className="mb-2 flex justify-center">
								<Heart className="h-8 w-8 text-[#0A84FF]" />
							</div>
							<div className="mb-1 font-bold text-2xl text-[#1E1E1E] md:text-3xl">
								25+
							</div>
							<div className="text-[#6B7280] text-sm">Events Hosted</div>
						</div>
					</div>
				</div>
			</div>

			{/* Background decoration */}
			<div className="-z-10 absolute inset-0 overflow-hidden">
				<div className="-top-40 -right-32 absolute h-80 w-80 rounded-full bg-[#0A84FF]/5 blur-3xl" />
				<div className="-bottom-40 -left-32 absolute h-80 w-80 rounded-full bg-[#FF3B30]/5 blur-3xl" />
			</div>
		</section>
	);
}
