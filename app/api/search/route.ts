export const dynamic = 'force-static';
import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('simple', {
    indexes: source.getPages().map((page) => ({
        title: page.data.title || 'Untitled',
        content: page.data.description || page.data.title || 'No description',
        url: page.url,
        id: page.url,
    })),
});
