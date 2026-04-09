import { MAX_EMAIL_CONTENT_LENGTH } from "@/constants";
import { z } from "zod";

export const ContactFormSchema = z.object({
	name: z.string("Without a name I do not know how to call you.").nonempty("Without a name I do not know how to call you."),
	email: z.email("Without a valid email I cannot contact you."),
	message: z
		.string("Without a message I have no idea what to talk about.")
		.nonempty("Without a message I have no idea what to talk about.")
		.max(MAX_EMAIL_CONTENT_LENGTH, "This message is a little to big for me to read.")
});
