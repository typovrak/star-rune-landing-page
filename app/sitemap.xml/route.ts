import { NextResponse } from 'next/server';
import data from "@/utils/data";

export function GET() {
	const urls: string[] = [];

	// home
	urls.push("/");
	urls.push("/credits");
	urls.push("/legal-notice");

	// generate xml
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map((url) => {
		return `
        <url>
            <loc>https://${data.domain}${url}</loc>
        </url>
      `;
	})
			.join("")}
    </urlset>`;

	return new NextResponse(xml, {
		status: 200,
		headers: {
			'Content-Type': 'text/xml',
		},
	});
}


