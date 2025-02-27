import { ReactElement } from "react";

export type ProjectCardProps = {
	/**
	 * The title of the project.
	 */
	title: string;

	/**
	 * The description of the project.
	 */
	description: string;

	/**
	 * Preview of the project if any.
	 */
	image: string | null;

	/**
	 * Links to any of the projects resources (such as the GH repository or a website).
	 */
	links: ProjectCardLink[];
};

export type ProjectCardLink = {
	/**
	 * The icon that will be shown for this link.
	 */
	icon: ReactElement;

	/**
	 * The URL that the user will visit when clicking on the link.
	 */
	url: string;

	/**
	 * Link description for screen readers.
	 */
	description: string;
};
