import { NextResponse } from 'next/server';
import data from "@/utils/data";

export function GET() {
	const txt = `User-agent: *
Allow: *

Sitemap: https://${data.domain}/sitemap.xml`;

	return new NextResponse(txt, {
		status: 200,
		headers: {
			'Content-Type': 'text/txt',
		},
	});
}


