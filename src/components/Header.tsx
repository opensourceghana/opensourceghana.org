"use client";

import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-[#E5E7EB] border-b bg-[#F9FAFB]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F9FAFB]/60">
			<div className="container mx-auto max-w-6xl px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<Github className="h-8 w-8 text-[#0A84FF]" />
						<span className="font-bold text-[#1E1E1E] text-xl">
							Open Source Ghana
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden items-center space-x-8 md:flex">
						<Link
							href="#home"
							className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
						>
							Home
						</Link>
						<Link
							href="#about"
							className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
						>
							About
						</Link>
						<Link
							href="#projects"
							className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
						>
							Community Projects
						</Link>
						<Link
							href="#events"
							className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
						>
							Events
						</Link>
						<Link
							href="#leads"
							className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
						>
							Leads
						</Link>
						<Link
							href="#resources"
							className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
						>
							Resources
						</Link>
						<Button className="bg-[#FF3B30] text-white hover:bg-[#E12A1F]">
							Join / Contribute
						</Button>
					</nav>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X className="h-6 w-6 text-[#1E1E1E]" />
						) : (
							<Menu className="h-6 w-6 text-[#1E1E1E]" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="border-[#E5E7EB] border-t py-4 md:hidden">
						<nav className="flex flex-col space-y-4">
							<Link
								href="#home"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href="#about"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
								onClick={() => setIsMenuOpen(false)}
							>
								About
							</Link>
							<Link
								href="#projects"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
								onClick={() => setIsMenuOpen(false)}
							>
								Community Projects
							</Link>
							<Link
								href="#events"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
								onClick={() => setIsMenuOpen(false)}
							>
								Events
							</Link>
							<Link
								href="#leads"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
								onClick={() => setIsMenuOpen(false)}
							>
								Leads
							</Link>
							<Link
								href="#resources"
								className="text-[#6B7280] transition-colors hover:text-[#0A84FF]"
								onClick={() => setIsMenuOpen(false)}
							>
								Resources
							</Link>
							<Button className="w-full bg-[#FF3B30] text-white hover:bg-[#E12A1F]">
								Join / Contribute
							</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
