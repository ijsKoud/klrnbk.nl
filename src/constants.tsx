import { Folder, Github, Home, MailOpen } from "lucide-react";
import { ProjectCardProps } from "./components/home/ui/project-card/types";
import { RecordedDate } from "./lib/types";

export const GITHUB_NAME = "ijskoud";
export const PROFILE_ICON = `https://github.com/${GITHUB_NAME}.png`;

export const MAX_EMAIL_CONTENT_LENGTH = 4096;

export const BIRTHDAY: RecordedDate = [2006, 2, 12];
export const CAREER_START: RecordedDate = [2020, 5, 18];

export const navigation = [
	{
		title: "Home",
		href: "/",
		icon: <Home />
	},
	{
		title: "About me",
		href: "/#about-me",
		icon: <Folder />
	},
	{
		title: "Contact",
		href: "/#contact",
		icon: <MailOpen />
	}
];

export const projects: ProjectCardProps[] = [
	{
		title: "paperplane",
		description: "An open-source customizable solution to storing files in the cloud. ✈️",
		image: "/static/projects/paperplane.jpg",
		links: [
			{
				description: "Github repository",
				icon: <Github />,
				url: "https://github.com/ijskoud/paperplane"
			}
		]
	},
	{
		title: "SCR Creator Hub",
		description: "Provider of stock footage and images for Stepford County Railway content creators.",
		image: "/static/projects/scr-creator-hub.jpg",
		links: []
	},
	{
		title: "Appiecal",
		description: "A small Kotlin based application responsible for syncing my work schedule with my calendar using CALDAV.",
		image: null,
		links: [
			{
				description: "Github repository",
				icon: <Github />,
				url: "https://github.com/ijskoud/appiecal"
			}
		]
	},
	{
		title: "ijsblokje",
		description: "Co-pilot for GitHub operations ✈️",
		image: null,
		links: [
			{
				description: "Github repository",
				icon: <Github />,
				url: "https://github.com/ijsKoud/ijsblokje"
			}
		]
	}
];
