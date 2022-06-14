export interface About {
	id: string;
	intro: string;
	slug: string;
	bio: string;
	picture: {
		url: string;
		height: number;
		width: number;
	};
}

export interface ProjectI {
	id: string;
	slug: string;
	title: string;
	updatedAt: string;
	repo: string;
	content: {
		html: string;
	};
	coverImage: {
		url: string;
	};
	frameworks: LangFrame[];
	languages: LangFrame[];
}

export interface LangFrame {
	name: string;
	slug: string;
}

export interface AboutRes {
	abouts: About[];
	projects: ProjectI[];
}
