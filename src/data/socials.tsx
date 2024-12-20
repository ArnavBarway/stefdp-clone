import type { Social } from "@/types/socials";

export const socials: Array<Social> = [
	{
		name: "Instagram",
		id: "instagram",
		image: "instagramLogo.webp",
		tooltip: "arnav_X_03",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#e52a5d",
		},
		url: "https://instagram.com/arnav_x_03",
		tooltipBorder: "3px solid #981b3d",
		username: "arnav_x_03"
	},
	{
		name: "GitHub",
		id: "github",
		image: "github.webp",
		tooltip: "ArnavBarway",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#fff",
			borderRadius: "5px",
			backgroundColor: "#313131",
		},
		url: "https://github.com/ArnavBarway",
		tooltipBorder: "3px solid #000000",
		username: "ArnavBarway"
	},
	{
		name: "Mail",
		id: "mail",
		image: "mail.webp",
		tooltip: "arnav@sagaraga.com",
		type: "mail",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#c5221f",
		},
		url: "mailto:arnav@sagaraga.com",
		tooltipBorder: "3px solid #8a1614",
		username: "arnav"
	},
];
