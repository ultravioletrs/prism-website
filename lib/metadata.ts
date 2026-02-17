import type { Metadata } from "next";

export const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://prism.ultraviolet.rs";

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        openGraph: {
            title: override.title ?? "Prism",
            description: override.description ?? "Prism - Secure Computation Platform",
            url: baseUrl,
            images: [
                {
                    url: `${baseUrl}/og/home`,
                    width: 1200,
                    height: 630,
                    alt: "Prism - Secure Computation Platform",
                },
            ],
            siteName: "Prism",
            ...override.openGraph,
        },
        twitter: {
            card: "summary_large_image",
            title: override.title ?? "Prism",
            description: override.description ?? "Prism - Secure Computation Platform",
            images: [
                {
                    url: `${baseUrl}/og/home`,
                    width: 1200,
                    height: 630,
                    alt: "Prism - Secure Computation Platform",
                },
            ],
            ...override.twitter,
        },
    };
}
