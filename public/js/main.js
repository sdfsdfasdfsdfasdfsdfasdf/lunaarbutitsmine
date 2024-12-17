console.log("[Lunaar]", "main.js");

function se() {
	try {
		const searchengine = localStorage.getItem("se");
		const seElement = document.getElementById("uv-search-engine");

		if (searchengine === "google") {
			seElement.value = "https://www.google.com/search?q=%s";
		} else if (searchengine === "bing") {
			seElement.value = "https://www.bing.com/search?q=%s";
		} else if (searchengine === "ddg") {
			seElement.value = "https://duckduckgo.com/?q=%s";
		} else if (searchengine === "brave") {
			seElement.value = "https://search.brave.com/search?q=%s";
		}
	} catch (err) {
		console.log("[Lunaar]", "Something bad happened", err);
	}
}

se();

const texts = [
	"Should you be studying?",
	"You guys are not doing your work whilst i'm an all A student",
	"What's up brother!",
	"Do not insert text here",
	"They not like us",
	"where did you come from?",
	"im bored, so are you",
	"play something fun!",
	"insert text here",
	"🧀",
	"🥚",
	"🌙",
	"Whats up? :)",
	"Spicy Nacho Doritos are good",
	"Yo so games are cool",
	"hi luke, bet i just scared all the lukes",
	"any of you played teardown?",
	"Bonelab = Garys mod",
	"la la la ",
	"Insert text here",
	"scream in class, i bet you wont.",
	"Banana",
	'get back on task lil bro',
	'B) thats a sun glass guy',
	"Or what!",
	"Ewww Homework whats that",
	"yo",
	"i LOVE mango snapples",
	"The site to cure total boardness",
	"hey",
	"blah blah blah",
	"check out selenite!",
	'this code is on line 57',
];

fetch("https://api.ipify.org?format=json")
	.then((response) => response.json())
	.then((data) => {
		const ipText = `${data.ip}`;
		texts.push(ipText);
	})
	.catch((error) => {
		console.error("Error fetching IP:", error);
	})
	.finally(() => {
		try {
			document.getElementById("rng").innerHTML = getRandomText();
		} catch (e) {
			console.warn("[Lunaar]", "Failed to set RNG Text.");
		}
	});

function getRandomText() {
	return texts[Math.floor(Math.random() * texts.length)];
}

if (navigator.userAgent.indexOf("Firefox") > 0) {
	alert("Firefox is not supported. Please use a Chromium-based browser.");
}

const websites = [
	"YouTube",
	"Facebook",
	"Reddit",
	"X",
	"TikTok",
	"Twitch",
	"my lost socks",
	"Wikipedia",
	"Instagram",
	"Wikipedia",
	"Amazon",
];

const siteurl = window.location.hostname;

$(document).ready(function () {
	if (window.location.hostname.includes("nativegames")) {
		$(".sitetext").text("native.");
		console.log("[Lunaar]", "Site: nativegames");
	}
});
const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
const uvaddress = document.getElementById("uv-address");

try {
	uvaddress.placeholder = `Try Searching "${randomWebsite}"`;
} catch (e) {
	console.warn("[Lunaar]", "Failed to set Dynamic placeholder");
}
