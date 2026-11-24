import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "@/constants";
import { AboutMe } from "./about-me";
import { Contact } from "./contact";
import { FeaturedWork } from "./featured-work";
import { HomeHero } from "./hero";
import { ExperienceCard } from "./ui/experience-card";
import { ProjectCard } from "./ui/project-card";

describe("home sections", () => {
	it("hero greets and links to the about section", () => {
		render(<HomeHero />);
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("DAAN KLARENBEEK");
		expect(screen.getByRole("link", { name: /about myself/i })).toHaveAttribute("href", "/#about-me");
	});

	it("about me renders its anchor target and contact link", () => {
		render(<AboutMe />);
		expect(screen.getByRole("heading", { name: "About me" })).toHaveAttribute("id", "about-me");
		expect(screen.getByRole("link", { name: /contact me/i })).toHaveAttribute("href", "/#contact");
	});

	it("featured work renders a card for every project", () => {
		render(<FeaturedWork />);
		expect(screen.getByRole("heading", { name: "Featured work" })).toHaveAttribute("id", "featured-work");
		for (const { title } of projects) expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
	});

	it("contact renders its anchor target and the form", () => {
		render(<Contact />);
		expect(screen.getByRole("heading", { name: /like what i am doing/i })).toHaveAttribute("id", "contact");
		expect(screen.getByRole("button", { name: /send a message/i })).toBeInTheDocument();
	});
});

describe("cards", () => {
	it("project card shows links and only renders an image when given one", () => {
		const props = { title: "Demo", description: "A demo", links: [{ icon: <i />, url: "https://example.com", description: "Website" }] };
		const { rerender } = render(<ProjectCard {...props} image={null} />);
		expect(screen.queryByRole("img")).not.toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Website" })).toHaveAttribute("href", "https://example.com");

		rerender(<ProjectCard {...props} image="/x.jpg" />);
		expect(within(document.body).getByRole("img", { name: "Preview of project Demo" })).toBeInTheDocument();
	});

	it("experience card shows the years", () => {
		render(<ExperienceCard years={6} />);
		expect(screen.getByText("6+")).toBeInTheDocument();
	});
});
