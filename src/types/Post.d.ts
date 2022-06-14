export interface Post {
	coverImage: string | null;
	id: string;
	slug: string;
	summary: string;
	title: string;
	createdAt: string;
	dateOverride: string | null;
	content: {
		html: string;
	};
	frameworks: LangFrame[];
	languages: LangFrame[];
}

export interface LangFrame {
	name: string;
	slug: string;
}
