import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { Post } from "../types/Post";

interface ArticleProps {
	article: Post;
}

const ArticlePreview: FunctionComponent<ArticleProps> = ({ article }) => {
	return (
		<div className="mb-3 p-3 card">
			<div className="card-body">
				<h4 className="card-title">{article.title}</h4>
				<div className="card-subtitle text-muted mb-3">
					{new Date(article.dateOverride || article.createdAt).toLocaleDateString("en-uk")}
				</div>
				<div className="card-text mb-3">{article.summary}</div>
				<Link href={"/articles/[slug]"} as={"/articles/" + article.slug}>
					<a className="btn btn-primary">Read More</a>
				</Link>
			</div>
		</div>
	);
};

export default ArticlePreview;
