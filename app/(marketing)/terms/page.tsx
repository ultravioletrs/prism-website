export const metadata = {
    title: 'Terms of Service - Ultraviolet',
    description: 'Terms of Service for Prism AI Platform',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
            <div className="text-center text-muted-foreground mb-12">
                <p>Effective Date: August 6, 2025</p>
                <p>Last Updated: November 18, 2025</p>
            </div>

            <div className="space-y-8 text-foreground/90">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. INTRODUCTION</h2>
                    <p className="mb-4">
                        These Terms of Service ("Terms") govern your access to and use of the Prism AI Platform ("Platform" or "Services"), a software-as-a-service offering operated by Ultraviolet ("Ultraviolet," "Company," "we," "us," or "our").
                    </p>
                    <p>
                        By creating an account, accessing, or using the Platform, you ("Customer," "you," or "your") agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. ACCESS AND LICENSE</h2>
                    <p className="mb-4">
                        Subject to your compliance with these Terms and payment of applicable fees, Ultraviolet grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform in accordance with your selected Subscription Plan and these Terms.
                    </p>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold mb-2">Restrictions</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Platform;</li>
                            <li>Copy, modify, adapt, alter, translate, or create derivative works of the Platform;</li>
                            <li>Rent, lease, sublicense, distribute, transfer, or resell access to the Platform;</li>
                            <li>Remove, alter, or obscure any proprietary notices on the Platform;</li>
                            <li>Circumvent or attempt to circumvent usage limits, security controls, or access restrictions;</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. CONTACT INFORMATION</h2>
                    <p className="mb-2">
                        <strong>Legal Questions:</strong> <a href="mailto:legal@ultraviolet.rs" className="text-primary hover:underline">legal@ultraviolet.rs</a>
                    </p>
                    <p className="mb-2">
                        <strong>General Support:</strong> <a href="mailto:info@ultraviolet.rs" className="text-primary hover:underline">info@ultraviolet.rs</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
