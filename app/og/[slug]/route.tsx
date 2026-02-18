import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';



export async function generateStaticParams() {
    return [
        { slug: 'privacy' },
        { slug: 'terms' },
        { slug: 'imprint' },
        { slug: 'prism' },
    ];
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    // Capitalize the first letter and replace hyphens with spaces
    const title = slug === 'prism'
        ? 'Prism - Secure Computation Platform'
        : slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

    try {
        const fontData = await fetch(
            new URL('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff')
        ).then((res) => res.arrayBuffer());

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#030711', // dark background
                        color: 'white',
                        fontFamily: '"Inter"',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '40px',
                        }}
                    >
                        {/* Logo or Icon placeholder if needed */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px',
                            }}
                        >
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: '#a855f7' }} // purple-500
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h1
                            style={{
                                fontSize: 60,
                                fontWeight: 800,
                                margin: 0,
                                padding: 0,
                                background: 'linear-gradient(to bottom right, #ffffff, #a855f7)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                lineHeight: 1.1,
                            }}
                        >
                            {title}
                        </h1>
                        <p
                            style={{
                                fontSize: 30,
                                fontWeight: 400,
                                margin: '20px 0 0 0',
                                color: '#94a3b8',
                            }}
                        >
                            Ultraviolet
                        </p>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Inter',
                        data: fontData,
                        style: 'normal',
                        weight: 400,
                    },
                ],
            }
        );
    } catch (e: any) {
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
