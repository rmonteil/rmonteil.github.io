/**
 * Génère un slug avec la date au format YYYY-MM-DD-slug
 * @param post - L'objet post contenant la date de publication et le slug
 * @returns Le slug formaté avec la date
 */
export function generatePostSlug(post: {
	data: { pubDate: Date | string };
	slug: string;
}): string {
	const date = new Date(post.data.pubDate);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}-${post.slug}`;
}
