import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export function Events() {
	const upcomingEvents = [
		{
			title: "Open Source Saturday",
			date: "2024-11-15",
			time: "9:00 AM - 5:00 PM",
			location: "MEST Africa, Accra",
			attendees: 45,
			maxAttendees: 60,
			description:
				"Monthly community meetup where we work on open source projects together, share knowledge, and network with fellow developers.",
			type: "Meetup",
			isVirtual: false,
		},
		{
			title: "Ghana Tech Hackathon 2024",
			date: "2024-12-07",
			time: "6:00 PM - 11:59 PM",
			location: "University of Ghana, Legon",
			attendees: 120,
			maxAttendees: 200,
			description:
				"48-hour hackathon focused on building solutions for local challenges using open source technologies. Prizes worth $10,000!",
			type: "Hackathon",
			isVirtual: false,
		},
		{
			title: "Introduction to Open Source",
			date: "2024-11-22",
			time: "7:00 PM - 9:00 PM",
			location: "Virtual Event",
			attendees: 85,
			maxAttendees: 100,
			description:
				"Beginner-friendly workshop covering Git, GitHub, and how to make your first open source contribution.",
			type: "Workshop",
			isVirtual: true,
		},
		{
			title: "AI & Machine Learning Meetup",
			date: "2024-12-01",
			time: "2:00 PM - 6:00 PM",
			location: "Ashesi University, Berekuso",
			attendees: 32,
			maxAttendees: 50,
			description:
				"Deep dive into AI/ML applications in African contexts, featuring talks from local researchers and practitioners.",
			type: "Conference",
			isVirtual: false,
		},
	];

	const pastEvents = [
		{
			title: "DevFest Accra 2024",
			date: "2024-10-15",
			attendees: 300,
			description:
				"Google Developer Group's annual conference featuring talks on web, mobile, and cloud technologies.",
		},
		{
			title: "Open Source Contribution Sprint",
			date: "2024-09-28",
			attendees: 75,
			description:
				"Intensive day of contributing to major open source projects with guidance from maintainers.",
		},
		{
			title: "Women in Tech Ghana Meetup",
			date: "2024-09-14",
			attendees: 60,
			description:
				"Celebrating and supporting women in technology with networking and skill-sharing sessions.",
		},
	];

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const getTypeColor = (type: string) => {
		switch (type) {
			case "Hackathon":
				return "bg-[#FF3B30]/10 text-[#FF3B30]";
			case "Workshop":
				return "bg-[#22C55E]/10 text-[#22C55E]";
			case "Conference":
				return "bg-[#F59E0B]/10 text-[#F59E0B]";
			default:
				return "bg-[#0A84FF]/10 text-[#0A84FF]";
		}
	};

	return (
		<section id="events" className="bg-white py-20">
			<div className="container mx-auto max-w-6xl px-4">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl text-[#1E1E1E] md:text-4xl">
						Upcoming Events
					</h2>
					<p className="mx-auto max-w-3xl text-[#6B7280] text-lg">
						Join us at our upcoming events to learn, network, and contribute to
						the open source community in Ghana.
					</p>
				</div>

				{/* Upcoming Events */}
				<div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
					{upcomingEvents.map((event) => (
						<Card
							key={event.title}
							className="border border-[#E5E7EB] transition-shadow duration-200 hover:shadow-lg"
						>
							<CardHeader>
								<div className="mb-2 flex items-start justify-between">
									<CardTitle className="font-semibold text-[#1E1E1E] text-xl">
										{event.title}
									</CardTitle>
									<span
										className={`rounded-md px-2 py-1 font-medium text-xs ${getTypeColor(
											event.type,
										)}`}
									>
										{event.type}
									</span>
								</div>
								<p className="text-[#6B7280] text-sm leading-relaxed">
									{event.description}
								</p>
							</CardHeader>
							<CardContent>
								{/* Event Details */}
								<div className="mb-4 space-y-3">
									<div className="flex items-center gap-2 text-[#6B7280] text-sm">
										<Calendar className="h-4 w-4" />
										<span>{formatDate(event.date)}</span>
									</div>
									<div className="flex items-center gap-2 text-[#6B7280] text-sm">
										<Clock className="h-4 w-4" />
										<span>{event.time}</span>
									</div>
									<div className="flex items-center gap-2 text-[#6B7280] text-sm">
										<MapPin className="h-4 w-4" />
										<span>{event.location}</span>
										{event.isVirtual && (
											<span className="rounded-md bg-[#0A84FF]/10 px-2 py-1 text-[#0A84FF] text-xs">
												Virtual
											</span>
										)}
									</div>
									<div className="flex items-center gap-2 text-[#6B7280] text-sm">
										<Users className="h-4 w-4" />
										<span>
											{event.attendees}/{event.maxAttendees} attendees
										</span>
									</div>
								</div>

								{/* Registration Button */}
								<Button className="w-full bg-[#FF3B30] text-white hover:bg-[#E12A1F]">
									Register Now
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Past Events */}
				<div>
					<h3 className="mb-8 text-center font-bold text-2xl text-[#1E1E1E]">
						Recent Events
					</h3>
					<div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
						{pastEvents.map((event) => (
							<Card
								key={event.title}
								className="border border-[#E5E7EB] transition-shadow duration-200 hover:shadow-md"
							>
								<CardContent className="p-6">
									<h4 className="mb-2 font-semibold text-[#1E1E1E] text-lg">
										{event.title}
									</h4>
									<p className="mb-3 text-[#6B7280] text-sm">
										{event.description}
									</p>
									<div className="flex items-center justify-between text-[#6B7280] text-sm">
										<span>{formatDate(event.date)}</span>
										<span className="flex items-center gap-1">
											<Users className="h-4 w-4" />
											{event.attendees}
										</span>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* CTA */}
				<div className="rounded-2xl bg-[#F9FAFB] p-8 text-center">
					<h3 className="mb-4 font-semibold text-2xl text-[#1E1E1E]">
						Want to Host an Event?
					</h3>
					<p className="mx-auto mb-6 max-w-2xl text-[#6B7280]">
						We're always looking for community members to organize and host
						events. Whether it's a workshop, meetup, or conference, we'll
						support you every step of the way.
					</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Button className="bg-[#0A84FF] text-white hover:bg-[#006BE0]">
							Propose an Event
						</Button>
						<Button
							variant="outline"
							className="border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white"
						>
							View Event Calendar
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
