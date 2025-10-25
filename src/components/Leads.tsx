import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Github, Linkedin, MapPin, Twitter } from "lucide-react";

export function Leads() {
	const leads = [
		{
			name: "Lomotey Temple Shelemiah",
			role: "Community Lead & Founder",
			location: "Ho, Ghana",
			company: "ShellLabsHQ",
			bio: "Full-stack developer with 4+ years of experience. Passionate about building inclusive tech communities and mentoring the next generation of African developers.",
			expertise: ["JavaScript", "Python", "Community Building", "Mentorship"],
			github: "https://github.com/temples-dev",
			linkedin: "https://linkedin.com/in/temples-dev",
			twitter: "https://twitter.com/temples-dev",
			image: "/api/placeholder/150/150",
		},
		{
			name: "Issa Saddick",
			role: "Technical Lead",
			location: "Ho, Ghana",
			company: "Cyber Security Analyst",
			bio: "Founder of Ticketflow",
			expertise: [
				"Cybersecurity",
				"Cloud Computing",
				"Open Source",
				"Project Management",
			],
			github: "https://github.com/x",
			linkedin: "https://linkedin.com/in/x",
			twitter: "https://twitter.com/x",
			image: "/api/placeholder/150/150",
		},
		{
			name: "Kofi Mensah",
			role: "Events Coordinator",
			location: "Takoradi, Ghana",
			company: "Ghana Tech Hub",
			bio: "Event organizer and community builder with a passion for bringing developers together. Coordinates hackathons, workshops, and meetups nationwide.",
			expertise: [
				"Event Management",
				"Community Outreach",
				"Public Speaking",
				"Networking",
			],
			github: "https://github.com/kofimensah",
			linkedin: "https://linkedin.com/in/kofimensah",
			twitter: "https://twitter.com/kofimensah",
			image: "/api/placeholder/150/150",
		},
		{
			name: "Akosua Frimpong",
			role: "Education & Outreach Lead",
			location: "Cape Coast, Ghana",
			company: "EduTech Ghana",
			bio: "Software engineer and educator focused on making technology education accessible. Leads workshops and mentorship programs for underrepresented groups.",
			expertise: [
				"Education",
				"React",
				"Mobile Development",
				"Diversity & Inclusion",
			],
			github: "https://github.com/akosuafrimpong",
			linkedin: "https://linkedin.com/in/akosuafrimpong",
			twitter: "https://twitter.com/akosuafrimpong",
			image: "/api/placeholder/150/150",
		},
		{
			name: "Yaw Boakye",
			role: "Partnership & Sponsorship Lead",
			location: "Accra, Ghana",
			company: "Ghana Fintech Solutions",
			bio: "Business development professional with deep connections in Ghana's tech ecosystem. Manages partnerships with companies and organizations supporting our community.",
			expertise: [
				"Business Development",
				"Partnerships",
				"Fintech",
				"Strategy",
			],
			github: "https://github.com/yawboakye",
			linkedin: "https://linkedin.com/in/yawboakye",
			twitter: "https://twitter.com/yawboakye",
			image: "/api/placeholder/150/150",
		},
		{
			name: "Efua Adjei",
			role: "Content & Communications Lead",
			location: "Tema, Ghana",
			company: "Digital Marketing Pro",
			bio: "Content strategist and technical writer. Manages our community communications, documentation, and helps amplify the voices of our community members.",
			expertise: [
				"Content Strategy",
				"Technical Writing",
				"Social Media",
				"Documentation",
			],
			github: "https://github.com/efuaadjei",
			linkedin: "https://linkedin.com/in/efuaadjei",
			twitter: "https://twitter.com/efuaadjei",
			image: "/api/placeholder/150/150",
		},
	];

	return (
		<section id="leads" className="bg-[#F9FAFB] py-20">
			<div className="container mx-auto max-w-6xl px-4">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl text-[#1E1E1E] md:text-4xl">
						Meet Our Community Leads
					</h2>
					<p className="mx-auto max-w-3xl text-[#6B7280] text-lg">
						Our dedicated team of volunteers who drive the Open Source Ghana
						community forward, organizing events, mentoring members, and
						building partnerships across the ecosystem.
					</p>
				</div>

				{/* Leads Grid */}
				<div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{leads.map((lead) => (
						<Card
							key={lead.name}
							className="hover:-translate-y-1 border border-[#E5E7EB] transition-all duration-200 hover:shadow-lg"
						>
							<CardContent className="p-6">
								{/* Profile Image */}
								<div className="mb-4 flex justify-center">
									<div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#0A84FF] to-[#FF3B30] font-bold text-2xl text-white">
										{lead.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
								</div>

								{/* Name and Role */}
								<div className="mb-4 text-center">
									<h3 className="mb-1 font-semibold text-[#1E1E1E] text-xl">
										{lead.name}
									</h3>
									<p className="mb-2 font-medium text-[#0A84FF]">{lead.role}</p>
									<div className="mb-3 flex items-center justify-center gap-4 text-[#6B7280] text-sm">
										<div className="flex items-center gap-1">
											<MapPin className="h-4 w-4" />
											<span>{lead.location}</span>
										</div>
									</div>
									<div className="mb-4 flex items-center justify-center gap-1 text-[#6B7280] text-sm">
										<Briefcase className="h-4 w-4" />
										<span>{lead.company}</span>
									</div>
								</div>

								{/* Bio */}
								<p className="mb-4 text-center text-[#6B7280] text-sm leading-relaxed">
									{lead.bio}
								</p>

								{/* Expertise Tags */}
								<div className="mb-6 flex flex-wrap justify-center gap-2">
									{lead.expertise.map((skill) => (
										<span
											key={skill}
											className="rounded-md bg-[#0A84FF]/10 px-2 py-1 font-medium text-[#0A84FF] text-xs"
										>
											{skill}
										</span>
									))}
								</div>

								{/* Social Links */}
								<div className="flex justify-center gap-3">
									<Button
										size="sm"
										variant="outline"
										className="border-[#6B7280] p-2 hover:border-[#0A84FF] hover:text-[#0A84FF]"
										asChild
									>
										<a
											href={lead.github}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${lead.name}'s GitHub`}
										>
											<Github className="h-4 w-4" />
										</a>
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="border-[#6B7280] p-2 hover:border-[#0A84FF] hover:text-[#0A84FF]"
										asChild
									>
										<a
											href={lead.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${lead.name}'s LinkedIn`}
										>
											<Linkedin className="h-4 w-4" />
										</a>
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="border-[#6B7280] p-2 hover:border-[#0A84FF] hover:text-[#0A84FF]"
										asChild
									>
										<a
											href={lead.twitter}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${lead.name}'s Twitter`}
										>
											<Twitter className="h-4 w-4" />
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Become a Lead CTA */}
				<div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center">
					<h3 className="mb-4 font-semibold text-2xl text-[#1E1E1E]">
						Want to Become a Community Lead?
					</h3>
					<p className="mx-auto mb-6 max-w-2xl text-[#6B7280]">
						We're always looking for passionate community members to join our
						leadership team. If you're interested in helping grow the open
						source community in Ghana, we'd love to hear from you.
					</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Button className="bg-[#FF3B30] text-white hover:bg-[#E12A1F]">
							Apply to be a Lead
						</Button>
						<Button
							variant="outline"
							className="border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white"
						>
							Learn About Leadership
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
