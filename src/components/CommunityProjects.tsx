import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, GitFork, Github, Star } from "lucide-react";

export function CommunityProjects() {
	const projects = [
		{
			title: "Ghana Pay API",
			description:
				"Open source payment gateway API for Ghanaian mobile money services, making it easier for developers to integrate local payment methods.",
			technologies: ["Node.js", "TypeScript", "Express", "MongoDB"],
			stars: 234,
			forks: 45,
			githubUrl: "https://github.com/opensourceghana/ghana-pay-api",
			liveUrl: "https://ghanapay.dev",
		},
		{
			title: "Twi Language Toolkit",
			description:
				"Natural language processing tools and resources for the Twi language, including text processing, translation utilities, and language models.",
			technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
			stars: 189,
			forks: 32,
			githubUrl: "https://github.com/opensourceghana/twi-toolkit",
			liveUrl: "https://twi-toolkit.org",
		},
		{
			title: "Ghana Education Portal",
			description:
				"A comprehensive educational platform providing free access to learning resources, courses, and tools for students across Ghana.",
			technologies: ["React", "Next.js", "Prisma", "PostgreSQL"],
			stars: 156,
			forks: 28,
			githubUrl: "https://github.com/opensourceghana/education-portal",
			liveUrl: "https://learn.ghana.dev",
		},
		{
			title: "Agric Connect",
			description:
				"Platform connecting farmers with buyers, providing market prices, weather data, and agricultural best practices for Ghanaian farmers.",
			technologies: ["Vue.js", "Laravel", "MySQL", "PWA"],
			stars: 98,
			forks: 19,
			githubUrl: "https://github.com/opensourceghana/agric-connect",
			liveUrl: "https://agricconnect.gh",
		},
		{
			title: "Open Data Ghana",
			description:
				"Centralized repository of open datasets from Ghana, including government data, economic indicators, and demographic information.",
			technologies: ["Python", "Django", "PostgreSQL", "Redis"],
			stars: 145,
			forks: 23,
			githubUrl: "https://github.com/opensourceghana/open-data",
			liveUrl: "https://data.ghana.dev",
		},
		{
			title: "Community Health Tracker",
			description:
				"Digital health monitoring system for rural communities, enabling health workers to track patient data and health metrics offline.",
			technologies: ["React Native", "Node.js", "SQLite", "PWA"],
			stars: 87,
			forks: 15,
			githubUrl: "https://github.com/opensourceghana/health-tracker",
			liveUrl: "https://health.ghana.dev",
		},
	];

	return (
		<section id="projects" className="bg-[#F9FAFB] py-20">
			<div className="container mx-auto max-w-6xl px-4">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl text-[#1E1E1E] md:text-4xl">
						Featured Projects from Our Community
					</h2>
					<p className="mx-auto max-w-3xl text-[#6B7280] text-lg">
						Discover innovative open source projects built by our community
						members, addressing real challenges and creating impact across Ghana
						and Africa.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Card
							key={project.title}
							className="hover:-translate-y-1 border border-[#E5E7EB] transition-all duration-200 hover:shadow-lg"
						>
							<CardHeader>
								<CardTitle className="mb-2 font-semibold text-[#1E1E1E] text-xl">
									{project.title}
								</CardTitle>
								<p className="text-[#6B7280] text-sm leading-relaxed">
									{project.description}
								</p>
							</CardHeader>
							<CardContent>
								{/* Technologies */}
								<div className="mb-4 flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="rounded-md bg-[#0A84FF]/10 px-2 py-1 font-medium text-[#0A84FF] text-xs"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Stats */}
								<div className="mb-4 flex items-center gap-4 text-[#6B7280] text-sm">
									<div className="flex items-center gap-1">
										<Star className="h-4 w-4" />
										<span>{project.stars}</span>
									</div>
									<div className="flex items-center gap-1">
										<GitFork className="h-4 w-4" />
										<span>{project.forks}</span>
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex gap-2">
									<Button
										size="sm"
										variant="outline"
										className="flex-1 border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white"
										asChild
									>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="mr-1 h-4 w-4" />
											Code
										</a>
									</Button>
									<Button
										size="sm"
										className="flex-1 bg-[#FF3B30] text-white hover:bg-[#E12A1F]"
										asChild
									>
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="mr-1 h-4 w-4" />
											Live
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* CTA */}
				<div className="text-center">
					<p className="mb-6 text-[#6B7280]">
						Want to showcase your project or contribute to existing ones?
					</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Button className="bg-[#0A84FF] text-white hover:bg-[#006BE0]">
							Submit Your Project
						</Button>
						<Button
							variant="outline"
							className="border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white"
						>
							Browse All Projects
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
