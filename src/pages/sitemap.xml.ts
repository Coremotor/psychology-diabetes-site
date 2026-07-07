import { diplomsRoutes, rootRoutes, routesList } from "data/routes";
import { siteUrl } from "data/seo";

const today = new Date().toISOString().split("T")[0];
const pages = [
	rootRoutes.home,
	rootRoutes.tariffs,
	rootRoutes.consultationInfo,
	...routesList(diplomsRoutes),
];

const normalizePath = (path: string) => (path.endsWith("/") ? path : `${path}/`);

export function GET() {
	const urls = pages
		.map((path) => {
			const normalizedPath = normalizePath(path);
			const priority = normalizedPath === "/"
				? "1.0"
				: normalizedPath.startsWith("/diploms/")
					? "0.6"
					: "0.9";
			const changefreq = normalizedPath.startsWith("/diploms/")
				? "monthly"
				: "weekly";

			return `
	<url>
		<loc>${new URL(normalizedPath, siteUrl).toString()}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`;
		})
		.join("");

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
}

export const prerender = true;
