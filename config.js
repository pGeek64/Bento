// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘


const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'pronay',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '599c0c3756c41c54c7c36de41b88c86f', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '22.616331',
	defaultLongitude: '88.331918',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '00:00',
	hourDarkThemeInactive: '23:59',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
	// use font-awesome for icons

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'fab fa-github-alt',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'far fa-envelope',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'WhatsApp',
			icon: 'fab fa-whatsapp',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '4',
			name: 'Drive',
			icon: 'fab fa-google-drive',
			link: 'https://drive.google.com/',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'fab fa-reddit-alien',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'fab fa-youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.in/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'fab fa-spotify',
			id: '1',
			links: [
				{
					name: 'revisited',
					link: 'https://open.spotify.com/playlist/1kz6c3UexmSeaX44TAQZES',
				},
				{
					name: 'my impending doom',
					link: 'https://open.spotify.com/playlist/6emjVsVvjPdlnomWZ75c1Z',
				},
				{
					name: 'bangla',
					link: 'https://open.spotify.com/playlist/46ttiaH1oxA2Geb9OODGm7',
				},
				{
					name: 'all',
					link: 'https://open.spotify.com/user/5gce3adarx27egg0eijqlbar6',
				},
			],
		},
		{
			icon: 'fas fa-briefcase',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Discord',
					link: 'https://discord.com/app',
				},
				{
					name: 'Classroom',
					link: 'https://classroom.google.com/u/',
				},
				{
					name: 'Meet',
					link: 'https://meet.google.com',
				},
			],
		},
	],
	
	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/pGeek64',
				},
			],
		},
	],
};
