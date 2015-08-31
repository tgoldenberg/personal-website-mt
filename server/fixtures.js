if (Projects.find().count() === 0 ) {
	Projects.insert({
		title: "SpeakIt", 
		description: "SpeakIt is an online language-exchange, currently with support for English, Spanish, and Mandarin. Users register with their native language and study language and are paired with users that wish to learn their native language. Users can make chat requests, and if accepted, are directed to a guided video conference. Conversation topics are selected based upon user performance in the conversations and their cumulative points. Technologies used: SpeakIt uses a Ruby on Rails backend, ReactJS on the front-end, and webRTC for video conferencing. It also utilizes Pusher for real-time updates and notifications.",
		imageUrl: "https://raw.githubusercontent.com/tgoldenberg/Speak-It/master/app/assets/images/speakit-landing.png",
		link: "https://speakitlanguages.com",
		github: "https://www.github.com/tgoldenberg/Speak-It"
	}); 
	Projects.insert({
		title: "SoTracks",
		description: "SoTracks is a social application to track your attending and organizing events. The app utilizes API calls to several event-based platforms, including the New York Times, Eventbrite, and Meetup.com. It then aggregates the information and displays the events that are perfect for you. You can search via location, category, or date, and can save events to your personal calendar.",
		imageUrl: "https://raw.githubusercontent.com/tgoldenberg/Event-Tracker/master/sotracks1.png",
		link: "https://sotracks-1-1.herokuapp.com/",
		github: "https://www.github.com/tgoldenberg/Event-Tracker"
	}); 
	Projects.insert({
		title: "ChessMentor",
		description: "ChessMentor is a web app that allows chess masters to connect with learners and provide guided instruction. The app utilizes webRTC and websocket technology to connect users in a live chess game, and then host a video conference playback session. ChessMentor uses Stripe Connect to host payments between parties.",
		imageUrl: "https://raw.githubusercontent.com/tgoldenberg/ChessMentor/master/app/assets/images/landing_background.png",
		link: "https://www.github.com/tgoldenberg/ChessMentor",
		github: "https://www.github.com/tgoldenberg/ChessMentor"
	});
}