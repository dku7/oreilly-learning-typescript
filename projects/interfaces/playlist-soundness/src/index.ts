interface Artists {
	[i: string]: string[];
}

interface UnrolledPlaylist {
	artists: Artists;
	songs: string[];
	time: number;
}

interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

interface Album {
	songs: Song[];
	type: "album";
}

interface Playlist {
	resolve(): Song[];
	type: "playlist";
}

type PlaylistItem = Song | Album | Playlist;

export function unrollPlaylist(items: PlaylistItem[]): UnrolledPlaylist {
	const artists: Artists = {};
	const songs: string[] = [];
	let time = 0;

	const addSong = (song: Song) => {
		const songArtists =
			typeof song.artist === "string" ? [song.artist] : song.artist;

		for (const artist of songArtists) {
			artists[artist] ??= [];
			artists[artist].push(song.name);
		}

		time += song.length;
		songs.push(song.name);
	};

	for (const item of items) {
		switch (item.type) {
			case "song":
				addSong(item);
				break;
			case "album":
				item.songs.forEach(addSong);
				break;
			case "playlist":
				item.resolve().forEach(addSong);
				break;
		}
	}

	return { artists, songs, time };
}
