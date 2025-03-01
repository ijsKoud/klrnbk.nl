import { FC } from "react";
import { ContactForm } from "./ui/contact-form";

export const Contact: FC = () => {
	return (
		<div className="flex flex-col gap-y-10 justify-center items-center">
			<div className="flex flex-col gap-y-5 items-center justify-center">
				<h2 className="text-5xl leading-none font-bold">Like what I am doing?</h2>
				<p className="text-lg leading-normal font-normal text-muted-foreground max-w-md">
					Send me a message with your contact details below and I will respond to them as soon as I possibly can!
				</p>
			</div>

			<ContactForm />
		</div>
	);
};
