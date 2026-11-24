import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { navigation } from "@/constants";
import { Footer } from "./footer";
import { Header } from "./Header";

describe("navigation", () => {
	it("header links to every navigation item", () => {
		render(<Header />);
		for (const { title, href } of navigation) expect(screen.getByRole("link", { name: title })).toHaveAttribute("href", href);
	});

	it("footer contact link targets the id used by the contact section", () => {
		render(<Footer />);
		expect(screen.getByRole("link", { name: "Contact Me" })).toHaveAttribute("href", "/#contact");
	});

	it("footer shows the current year and the guestbook link", () => {
		render(<Footer />);
		expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Guestbook" })).toHaveAttribute("href", "/guestbook");
	});
});
