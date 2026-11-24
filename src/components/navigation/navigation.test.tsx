import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { navigation } from "@/constants";
import { Footer } from "./footer";
import { Header } from "./Header";

describe("navigation", () => {
	it("header links to every navigation item", () => {
		render(<Header />);
		// Queried by href: the links currently have no accessible name (the sr-only label sits outside the <a>).
		expect(screen.getAllByRole("link").map((link) => link.getAttribute("href"))).toEqual(navigation.map((item) => item.href));
	});

	it("footer shows the current year and the guestbook link", () => {
		render(<Footer />);
		expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Guestbook" })).toHaveAttribute("href", "/guestbook");
	});
});
