import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';

export const revalidate = false;

export function generateStaticParams() {
    return [
        { slug: 'home' },
        { slug: 'imprint' },
        { slug: 'privacy' },
        { slug: 'terms' },
    ];
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let title = 'Prism';
    let description = 'The secure computation platform for sensitive data.';

    switch (slug) {
        case 'home':
            title = 'Prism | Secure Computation Platform';
            description = 'Prism is a secure computation platform that allows you to run computations on sensitive data without exposing it.';
            break;
        case 'imprint':
            title = 'Imprint - Ultraviolet';
            description = 'Imprint and Legal Information for Ultraviolet';
            break;
        case 'privacy':
            title = 'Privacy Policy - Ultraviolet';
            description = 'Privacy Policy for Prism AI Platform';
            break;
        case 'terms':
            title = 'Terms of Service - Ultraviolet';
            description = 'Terms of Service for Prism AI Platform';
            break;
    }

    return new ImageResponse(
        <DefaultImage title={title} description={description} site="Prism" />,
        {
            width: 1200,
            height: 630,
        },
    );
}
