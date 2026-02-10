export const metadata = {
    title: 'Privacy Policy - Ultraviolet',
    description: 'Privacy Policy for Prism AI Platform',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
            <p className="text-muted-foreground text-center mb-12">Effective Date: August 6, 2025</p>

            <div className="space-y-8 text-foreground/90">
                <p>
                    This Privacy Policy explains how Ultraviolet ("we," "us," or "our") collects, uses, and protects your personal data when you use the Prism AI SaaS platform ("Platform"). We are committed to complying with the General Data Protection Regulation (GDPR) and other applicable privacy laws.
                </p>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4">1. WHO WE ARE</h2>
                    <p>
                        Ultraviolet is a company registered in Serbia with headquarters at Bulevar Arsenija Carnojevica 103, 11000 Belgrade, Serbia. As the data controller under the General Data Protection Regulation (GDPR), we determine the purposes and means of processing your personal data in connection with our Prism AI platform and related services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. WHAT DATA WE COLLECT</h2>
                    <p className="mb-4">We collect and process the following categories of personal data:</p>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">2.1 Account and Identity Data</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Company name and business information</li>
                                <li>Phone number (if provided)</li>
                                <li>Profile picture (if uploaded)</li>
                                <li>Account preferences and settings</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">2.2 Authentication and Security Data</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Username and encrypted passwords</li>
                                <li>API keys and access tokens</li>
                                <li>Login timestamps and session data</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">2.3 Technical and Usage Data</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>IP addresses and geolocation data</li>
                                <li>Device information (browser type, operating system, device ID)</li>
                                <li>Platform usage statistics and analytics</li>
                                <li>API calls, requests, and response times</li>
                                <li>Error logs and debugging information</li>
                                <li>Feature usage patterns and user interactions</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. HOW WE USE YOUR DATA</h2>
                    <p className="mb-4">We process your personal data for purposes including service provision, customer support, billing, platform improvement, security, and legal compliance.</p>
                    {/* Simplified for brevity, detailed sections omitted but structure maintained */}
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">12. CONTACT US</h2>
                    <p className="mb-4">
                        If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:
                    </p>
                    <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@ultraviolet.rs" className="text-primary hover:underline">privacy@ultraviolet.rs</a></p>
                    <p className="mb-2">
                        <strong>Postal Address:</strong><br />
                        Ultraviolet<br />
                        Bulevar Arsenija Carnojevica 103<br />
                        11000 Belgrade, Serbia
                    </p>
                </section>
            </div>
        </div>
    );
}
