"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ContactFormSchema } from "./schema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const ContactForm: FC = () => {
	const form = useForm<z.infer<typeof ContactFormSchema>>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: { name: "", email: "", message: "" }
	});

	const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				values,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);

			toast("Message received", { description: "I have received your message, I will contact you back as soon as possible!" });
			form.reset({ name: "", email: "", message: "" });
		} catch (err) {
			console.error("Unable to send email via emailjs service:", err);
			toast("Message not received", {
				description: "There was a problem processing your request, please try again later."
			});
		}
	};

	return (
		<Form {...form}>
			<form className="max-w-md w-full flex flex-col gap-y-4" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your name</FormLabel>
							<FormControl>
								<Input placeholder="Daan Klarenbeek" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="daan@klrnbk.nl" type="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea placeholder="Your message here" className="resize-none h-28" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full" disabled={!form.formState.isValid || form.formState.isLoading}>
					{form.formState.isLoading && <Loader2 className="animate-spin" />} Send a message
				</Button>
			</form>
		</Form>
	);
};
