import { Button } from "@/components/ui/button";
import { Github, Heart, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
	const quickLinks = [
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Events", href: "#events" },
		{ name: "Leads", href: "#leads" },
	];

	const resources = [
		{ name: "Documentation", href: "/docs" },
		{ name: "GitHub", href: "https://github.com/opensourceghana" },
		{ name: "Blog", href: "/blog" },
		{ name: "Newsletter", href: "/newsletter" },
	];

	const community = [
		{ name: "Discord", href: "https://discord.gg/opensourceghana" },
		{ name: "Slack", href: "https://opensourceghana.slack.com" },
		{ name: "Telegram", href: "https://t.me/opensourceghana" },
		{ name: "WhatsApp", href: "https://chat.whatsapp.com/opensourceghana" },
	];

	const contact = [
		{ name: "Contact Us", href: "/contact" },
		{ name: "Sponsor", href: "/sponsor" },
		{ name: "Partnership", href: "/partnership" },
		{ name: "Press Kit", href: "/press" },
	];

	return (
		<footer className="bg-[#1E1E1E] text-white">
			<div className="container mx-auto max-w-6xl px-4 py-16">
				{/* Main Footer Content */}
				<div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
					{/* Brand Section */}
					<div className="lg:col-span-2">
						<div className="mb-4 flex items-center space-x-2">
							<Github className="h-8 w-8 text-[#0A84FF]" />
							<span className="font-bold text-xl">Open Source Ghana</span>
						</div>
						<p className="mb-6 max-w-md text-[#6B7280] leading-relaxed">
							"Open Source Ghana is a community empowering collaboration,
							innovation, and open technology across Africa."
						</p>
						<div className="mb-4 flex items-center gap-2 text-[#6B7280]">
							<MapPin className="h-4 w-4" />
							<span>Accra, Ghana</span>
						</div>
						<div className="flex items-center gap-2 text-[#6B7280]">
							<Mail className="h-4 w-4" />
							<a
								href="mailto:hello@opensourceghana.org"
								className="transition-colors hover:text-[#0A84FF]"
							>
								hello@opensourceghana.org
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="mb-4 font-semibold text-lg">Resources</h3>
						<ul className="space-y-3">
							{resources.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										target={link.href.startsWith("http") ? "_blank" : undefined}
										rel={
											link.href.startsWith("http")
												? "noopener noreferrer"
												: undefined
										}
										className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Community */}
					<div>
						<h3 className="mb-4 font-semibold text-lg">Community</h3>
						<ul className="space-y-3">
							{community.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Newsletter Signup */}
				<div className="mb-12 rounded-2xl bg-[#0A84FF]/10 p-8">
					<div className="text-center">
						<h3 className="mb-4 font-bold text-2xl">Stay Updated</h3>
						<p className="mx-auto mb-6 max-w-2xl text-[#6B7280]">
							Get the latest news about our community, upcoming events, and new
							projects delivered to your inbox.
						</p>
						<div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]"
							/>
							<Button className="bg-[#FF3B30] px-6 py-3 text-white hover:bg-[#E12A1F]">
								Subscribe
							</Button>
						</div>
					</div>
				</div>

				{/* Social Links & Copyright */}
				<div className="border-[#6B7280]/20 border-t pt-8">
					<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
						{/* Social Links */}
						<div className="flex items-center gap-4">
							<span className="text-[#6B7280] text-sm">Follow us:</span>
							<div className="flex gap-3">
								<Button
									size="sm"
									// variant="outline"
									className="border-[#6B7280] p-2 hover:border-[#0A84FF] hover:bg-transparent hover:text-[#0A84FF]"
									asChild
								>
									<a
										href="https://github.com/opensourceghana"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="GitHub"
									>
										<Github className="h-4 w-4" />
									</a>
								</Button>
								<Button
									size="sm"
									// variant="outline"
									className="border-[#6B7280] p-2 hover:border-[#0A84FF] hover:bg-transparent hover:text-[#0A84FF]"
									asChild
								>
									<a
										href="https://twitter.com/opensourceghana"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Twitter"
									>
										<Twitter className="h-4 w-4" />
									</a>
								</Button>
								<Button
									size="sm"
									// variant="outline"
									className="border-[#6B7280] p-2 hover:border-[#0A84FF] hover:bg-transparent hover:text-[#0A84FF]"
									asChild
								>
									<a
										href="https://linkedin.com/company/opensourceghana"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="LinkedIn"
									>
										<Linkedin className="h-4 w-4" />
									</a>
								</Button>
							</div>
						</div>

						{/* Copyright */}
						<div className="flex items-center gap-2 text-[#6B7280] text-sm">
							<span>
								© {new Date().getFullYear()} Open Source Ghana. Made with
							</span>
							<Heart className="h-4 w-4 text-[#FF3B30]" />
							<span>in Ghana</span>
						</div>
					</div>

					{/* Additional Links */}
					<div className="mt-6 flex flex-col items-center justify-center gap-6 border-[#6B7280]/20 border-t pt-6 sm:flex-row">
						<div className="flex gap-6 text-sm">
							<Link
								href="/privacy"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
							>
								Terms of Service
							</Link>
							<Link
								href="/code-of-conduct"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
							>
								Code of Conduct
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
