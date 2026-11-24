import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cn, getAge } from "./utils";

describe("cn", () => {
	it("merges conflicting tailwind classes and drops falsy values", () => {
		expect(cn("px-2", false && "hidden", "px-4")).toBe("px-4");
	});
});

describe("getAge", () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => vi.useRealTimers());

	it.each([
		["the day before the birthday", "2026-02-11T12:00:00", 19],
		["on the birthday", "2026-02-12T12:00:00", 20],
		["earlier month than the birthday month", "2026-01-31T12:00:00", 19],
		["later month than the birthday month", "2026-11-24T12:00:00", 20]
	])("%s", (_, now, expected) => {
		vi.setSystemTime(new Date(now));
		expect(getAge([2006, 2, 12])).toBe(expected);
	});
});
