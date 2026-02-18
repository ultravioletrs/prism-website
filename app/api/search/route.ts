export const dynamic = 'force-static';
import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export async function GET() {
    const indexes = source.getPages().map((page) => ({
        title: page.data.title || 'Untitled',
        content: page.data.description || page.data.title || 'No description',
        url: page.url,
        id: page.url,
    }));
    return Response.json(indexes);
}
