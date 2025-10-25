import { About } from "@/components/About";
import { CommunityProjects } from "@/components/CommunityProjects";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JoinUs } from "@/components/JoinUs";
import { Leads } from "@/components/Leads";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-[#F9FAFB]">
			<Header />
			<main>
				<Hero />
				<About />
				<CommunityProjects />
				<Events />
				<Leads />
				<JoinUs />
			</main>
			<Footer />
		</div>
	);
}
