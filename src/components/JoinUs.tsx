import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	ArrowRight,
	BookOpen,
	Calendar,
	Code,
	Github,
	Heart,
	Megaphone,
	MessageCircle,
	Users,
} from "lucide-react";

export function JoinUs() {
	const ways = [
		{
			icon: Code,
			title: "Contribute to Projects",
			description:
				"Help build and maintain open source projects that make a real impact in Ghana and Africa.",
			actions: [
				"Submit pull requests",
				"Report bugs",
				"Improve documentation",
				"Review code",
			],
			color: "text-[#0A84FF]",
			bgColor: "bg-[#0A84FF]/10",
		},
		{
			icon: BookOpen,
			title: "Share Knowledge",
			description:
				"Teach others by writing tutorials, giving talks, or mentoring newcomers to open source.",
			actions: [
				"Write blog posts",
				"Create tutorials",
				"Speak at events",
				"Mentor developers",
			],
			color: "text-[#22C55E]",
			bgColor: "bg-[#22C55E]/10",
		},
		{
			icon: Calendar,
			title: "Attend Events",
			description:
				"Join our meetups, workshops, and hackathons to learn, network, and collaborate with peers.",
			actions: [
				"Attend meetups",
				"Join hackathons",
				"Participate in workshops",
				"Network with peers",
			],
			color: "text-[#F59E0B]",
			bgColor: "bg-[#F59E0B]/10",
		},
		{
			icon: Megaphone,
			title: "Spread the Word",
			description:
				"Help grow our community by sharing our mission and inviting others to join the movement.",
			actions: [
				"Share on social media",
				"Invite friends",
				"Write testimonials",
				"Promote events",
			],
			color: "text-[#FF3B30]",
			bgColor: "bg-[#FF3B30]/10",
		},
	];

	const benefits = [
		"Access to exclusive workshops and training sessions",
		"Networking opportunities with industry professionals",
		"Mentorship from experienced developers",
		"Collaboration on impactful projects",
		"Career development and job opportunities",
		"Recognition for your contributions",
		"Free access to community resources and tools",
		"Opportunity to speak at events and conferences",
	];

	return (
		<section id="join" className="bg-white py-20">
			<div className="container mx-auto max-w-6xl px-4">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl text-[#1E1E1E] md:text-4xl">
						Join the Movement
					</h2>
					<p className="mx-auto max-w-3xl text-[#6B7280] text-lg">
						Be part of Ghana's growing open source community. Whether you're a
						beginner or an expert, there's a place for you to contribute and
						grow with us.
					</p>
				</div>

				{/* Ways to Contribute */}
				<div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
					{ways.map((way) => (
						<Card
							key={way.title}
							className="hover:-translate-y-1 border border-[#E5E7EB] transition-all duration-200 hover:shadow-lg"
						>
							<CardContent className="p-6">
								<div className="flex items-start gap-4">
									<div
										className={`rounded-full p-3 ${way.bgColor} flex-shrink-0`}
									>
										<way.icon className={`h-6 w-6 ${way.color}`} />
									</div>
									<div className="flex-1">
										<h3 className="mb-2 font-semibold text-[#1E1E1E] text-xl">
											{way.title}
										</h3>
										<p className="mb-4 text-[#6B7280] leading-relaxed">
											{way.description}
										</p>
										<ul className="space-y-2">
											{way.actions.map((action) => (
												<li
													key={action}
													className="flex items-center gap-2 text-[#6B7280] text-sm"
												>
													<ArrowRight className="h-3 w-3 text-[#0A84FF]" />
													<span>{action}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Benefits Section */}
				<div className="mb-16 rounded-2xl bg-[#F9FAFB] p-8 md:p-12">
					<div className="mb-8 text-center">
						<h3 className="mb-4 font-bold text-2xl text-[#1E1E1E] md:text-3xl">
							What You'll Get
						</h3>
						<p className="mx-auto max-w-2xl text-[#6B7280]">
							When you join Open Source Ghana, you become part of a supportive
							community that's invested in your growth and success.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						{benefits.map((benefit) => (
							<div key={benefit} className="flex items-center gap-3">
								<div className="flex-shrink-0 rounded-full bg-[#22C55E]/10 p-1">
									<Heart className="h-4 w-4 text-[#22C55E]" />
								</div>
								<span className="text-[#6B7280]">{benefit}</span>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className="text-center">
					<h3 className="mb-4 font-bold text-2xl text-[#1E1E1E] md:text-3xl">
						Ready to Get Started?
					</h3>
					<p className="mx-auto mb-8 max-w-2xl text-[#6B7280]">
						Join thousands of developers, designers, and tech enthusiasts who
						are building the future of technology in Ghana and Africa.
					</p>

					{/* Primary CTAs */}
					<div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
						<Button
							size="lg"
							className="bg-[#FF3B30] px-8 py-3 font-semibold text-lg text-white hover:bg-[#E12A1F]"
						>
							Join Our Community
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-[#0A84FF] px-8 py-3 font-semibold text-[#0A84FF] text-lg hover:bg-[#0A84FF] hover:text-white"
						>
							Start Contributing
						</Button>
					</div>

					{/* Social Links */}
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<span className="text-[#6B7280] text-sm">Connect with us:</span>
						<div className="flex gap-3">
							<Button
								size="sm"
								variant="outline"
								className="border-[#6B7280] hover:border-[#0A84FF] hover:text-[#0A84FF]"
								asChild
							>
								<a
									href="https://github.com/opensourceghana"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
								>
									<Github className="mr-2 h-4 w-4" />
									GitHub
								</a>
							</Button>
							<Button
								size="sm"
								variant="outline"
								className="border-[#6B7280] hover:border-[#0A84FF] hover:text-[#0A84FF]"
								asChild
							>
								<a
									href="https://discord.gg/opensourceghana"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Discord"
								>
									<MessageCircle className="mr-2 h-4 w-4" />
									Discord
								</a>
							</Button>
							<Button
								size="sm"
								variant="outline"
								className="border-[#6B7280] hover:border-[#0A84FF] hover:text-[#0A84FF]"
								asChild
							>
								<a
									href="https://twitter.com/opensourceghana"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Twitter"
								>
									<Users className="mr-2 h-4 w-4" />
									Twitter
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
