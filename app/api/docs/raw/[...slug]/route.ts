import { getLLMText, source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export async function GET(
    _req: Request,
    props: { params: Promise<{ slug: string[] }> },
) {
    const params = await props.params;

    let slug = params.slug;
    if (slug.length === 1 && slug[0] === '_root') {
        slug = [];
    }

    const page = source.getPage(slug);
    if (!page) notFound();

    const text = await getLLMText(page);

    return new Response(text, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}

export async function generateStaticParams() {
    const params = await source.generateParams();
    if (!params.find((param) => param.slug?.length === 0)) {
        params.push({ slug: [], lang: params[0]?.lang || 'en' });
    }

    return params.map((param) => {
        if (param.slug?.length === 0) {
            return { ...param, slug: ['_root'] };
        }
        return param;
    });
}
