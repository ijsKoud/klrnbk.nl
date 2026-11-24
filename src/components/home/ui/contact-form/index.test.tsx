import emailjs from "@emailjs/browser";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from ".";

vi.mock("@emailjs/browser", () => ({ default: { send: vi.fn() } }));
vi.mock("sonner", () => ({ toast: vi.fn() }));

const values = { name: "Daan", email: "daan@klrnbk.nl", message: "Hello there" };

async function fillIn() {
	const user = userEvent.setup();
	await user.type(screen.getByLabelText("Your name"), values.name);
	await user.type(screen.getByLabelText("Email"), values.email);
	await user.type(screen.getByLabelText("Message"), values.message);
	return user;
}

const submit = () => screen.getByRole("button", { name: /send a message/i });

describe("ContactForm", () => {
	beforeEach(() => {
		vi.stubEnv("NEXT_PUBLIC_EMAILJS_SERVICE_ID", "service");
		vi.stubEnv("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", "template");
		vi.stubEnv("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", "key");
	});
	afterEach(() => {
		vi.unstubAllEnvs();
		vi.clearAllMocks();
	});

	it("cannot be submitted while the form is invalid", async () => {
		render(<ContactForm />);
		expect(submit()).toBeDisabled();

		const user = userEvent.setup();
		await user.type(screen.getByLabelText("Email"), "nope");
		expect(submit()).toBeDisabled();
		expect(emailjs.send).not.toHaveBeenCalled();
	});

	it("sends the values, confirms with a toast and resets the form", async () => {
		vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: "OK" });
		render(<ContactForm />);

		const user = await fillIn();
		await waitFor(() => expect(submit()).toBeEnabled());
		await user.click(submit());

		await waitFor(() => expect(toast).toHaveBeenCalledWith("Message received", expect.anything()));
		expect(emailjs.send).toHaveBeenCalledWith("service", "template", values, "key");
		expect(screen.getByLabelText("Your name")).toHaveValue("");
		expect(screen.getByLabelText("Message")).toHaveValue("");
	});

	it("shows an error toast and keeps the input when sending fails", async () => {
		vi.mocked(emailjs.send).mockRejectedValue(new Error("boom"));
		vi.spyOn(console, "error").mockImplementation(() => {});
		render(<ContactForm />);

		const user = await fillIn();
		await waitFor(() => expect(submit()).toBeEnabled());
		await user.click(submit());

		await waitFor(() => expect(toast).toHaveBeenCalledWith("Message not received", expect.anything()));
		expect(screen.getByLabelText("Message")).toHaveValue(values.message);
	});
});
