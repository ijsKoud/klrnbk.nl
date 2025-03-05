import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RecordedDate } from "./types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getAge(birthday: RecordedDate) {
	const birthDate = new Date(birthday[0], birthday[1] - 1, birthday[2]);
	const today = new Date();

	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDifference = today.getMonth() - birthDate.getMonth();

	if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) age--;

	return age;
}
