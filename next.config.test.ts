import { describe, expect, it } from "vitest";
import nextConfig from "./next.config";

describe("redirects", () => {
	it("keeps the permanent short links pointing at their destinations", async () => {
		const redirects = await nextConfig.redirects!();
		expect(redirects.map(({ source, destination, permanent }) => [source, destination, permanent])).toEqual([
			["/discord/banner", "https://discord.com/api/guilds/828382957310967820/embed.png?style=banner2", true],
			["/discord", "https://discord.gg/6X2TZZ5Gjg", true],
			["/github", "https://github.com/ijsKoud", true],
			["/github/:repo", "https://github.com/ijsKoud/:repo", true],
			["/paypal", "https://paypal.me/DaanGamesDG", true],
			["/kofi", "https://ko-fi.com/ijsKoud", true],
			["/twitter", "https://twitter.com/ijs_Koud", true],
			["/linkedin", "https://www.linkedin.com/in/daan-klarenbeek/", true]
		]);
	});
});
