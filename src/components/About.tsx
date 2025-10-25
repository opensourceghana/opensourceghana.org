import { Card, CardContent } from "@/components/ui/card";
import { Globe, Lightbulb, Target, Users } from "lucide-react";

export function About() {
	return (
		<section id="about" className="bg-white py-20">
			<div className="container mx-auto max-w-6xl px-4">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl text-[#1E1E1E] md:text-4xl">
						About Open Source Ghana
					</h2>
					<p className="mx-auto max-w-3xl text-[#6B7280] text-lg">
						We are a community-driven organization dedicated to fostering
						collaboration, innovation, and open technology across Ghana and
						Africa.
					</p>
				</div>

				{/* Mission Statement */}
				<div className="mb-16 rounded-2xl bg-[#F9FAFB] p-8 text-center md:p-12">
					<h3 className="mb-4 font-semibold text-2xl text-[#1E1E1E] md:text-3xl">
						Our Mission
					</h3>
					<p className="mx-auto max-w-4xl text-[#6B7280] text-lg leading-relaxed">
						"Open Source Ghana is a community empowering collaboration,
						innovation, and open technology across Africa. We believe in the
						power of open source to drive technological advancement, create
						opportunities, and build a more inclusive digital future for our
						continent."
					</p>
				</div>

				{/* Core Values */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					<Card className="border border-[#E5E7EB] transition-shadow duration-200 hover:shadow-lg">
						<CardContent className="p-6 text-center">
							<div className="mb-4 flex justify-center">
								<div className="rounded-full bg-[#0A84FF]/10 p-3">
									<Users className="h-8 w-8 text-[#0A84FF]" />
								</div>
							</div>
							<h4 className="mb-2 font-semibold text-[#1E1E1E] text-lg">
								Community First
							</h4>
							<p className="text-[#6B7280] text-sm">
								Building strong connections and fostering collaboration among
								developers across Ghana.
							</p>
						</CardContent>
					</Card>

					<Card className="border border-[#E5E7EB] transition-shadow duration-200 hover:shadow-lg">
						<CardContent className="p-6 text-center">
							<div className="mb-4 flex justify-center">
								<div className="rounded-full bg-[#0A84FF]/10 p-3">
									<Lightbulb className="h-8 w-8 text-[#0A84FF]" />
								</div>
							</div>
							<h4 className="mb-2 font-semibold text-[#1E1E1E] text-lg">
								Innovation
							</h4>
							<p className="text-[#6B7280] text-sm">
								Encouraging creative solutions and cutting-edge technologies to
								solve local and global challenges.
							</p>
						</CardContent>
					</Card>

					<Card className="border border-[#E5E7EB] transition-shadow duration-200 hover:shadow-lg">
						<CardContent className="p-6 text-center">
							<div className="mb-4 flex justify-center">
								<div className="rounded-full bg-[#0A84FF]/10 p-3">
									<Target className="h-8 w-8 text-[#0A84FF]" />
								</div>
							</div>
							<h4 className="mb-2 font-semibold text-[#1E1E1E] text-lg">
								Impact Driven
							</h4>
							<p className="text-[#6B7280] text-sm">
								Creating meaningful projects that make a real difference in our
								communities and beyond.
							</p>
						</CardContent>
					</Card>

					<Card className="border border-[#E5E7EB] transition-shadow duration-200 hover:shadow-lg">
						<CardContent className="p-6 text-center">
							<div className="mb-4 flex justify-center">
								<div className="rounded-full bg-[#0A84FF]/10 p-3">
									<Globe className="h-8 w-8 text-[#0A84FF]" />
								</div>
							</div>
							<h4 className="mb-2 font-semibold text-[#1E1E1E] text-lg">
								Open Access
							</h4>
							<p className="text-[#6B7280] text-sm">
								Promoting transparency, accessibility, and knowledge sharing for
								everyone.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* What We Do */}
				<div className="mt-20">
					<h3 className="mb-12 text-center font-bold text-2xl text-[#1E1E1E] md:text-3xl">
						What We Do
					</h3>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="text-center">
							<h4 className="mb-3 font-semibold text-[#1E1E1E] text-xl">
								Open Source Projects
							</h4>
							<p className="text-[#6B7280]">
								We develop and maintain open source projects that address real
								challenges in Ghana and Africa, from fintech to agriculture.
							</p>
						</div>
						<div className="text-center">
							<h4 className="mb-3 font-semibold text-[#1E1E1E] text-xl">
								Community Events
							</h4>
							<p className="text-[#6B7280]">
								Regular meetups, hackathons, workshops, and conferences to bring
								developers together and share knowledge.
							</p>
						</div>
						<div className="text-center">
							<h4 className="mb-3 font-semibold text-[#1E1E1E] text-xl">
								Mentorship & Learning
							</h4>
							<p className="text-[#6B7280]">
								Providing guidance, resources, and opportunities for developers
								at all levels to grow their skills and careers.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
