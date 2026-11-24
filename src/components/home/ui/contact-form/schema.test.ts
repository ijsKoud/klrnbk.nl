import { describe, expect, it } from "vitest";
import { MAX_EMAIL_CONTENT_LENGTH } from "@/constants";
import { ContactFormSchema } from "./schema";

const valid = { name: "Daan", email: "daan@klrnbk.nl", message: "Hello" };

describe("ContactFormSchema", () => {
	it("accepts valid input", () => {
		expect(ContactFormSchema.safeParse(valid).success).toBe(true);
	});

	it.each([
		["name", { ...valid, name: "" }],
		["email", { ...valid, email: "not-an-email" }],
		["message", { ...valid, message: "" }],
		["message", { ...valid, message: "a".repeat(MAX_EMAIL_CONTENT_LENGTH + 1) }]
	])("rejects an invalid %s", (field, input) => {
		const result = ContactFormSchema.safeParse(input);
		expect(result.success).toBe(false);
		expect(result.error!.issues[0].path).toEqual([field]);
	});

	it("accepts a message of exactly the maximum length", () => {
		expect(ContactFormSchema.safeParse({ ...valid, message: "a".repeat(MAX_EMAIL_CONTENT_LENGTH) }).success).toBe(true);
	});
});
