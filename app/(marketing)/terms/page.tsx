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
                    <p className="mb-4">
                        By creating an account, accessing, or using the Platform, you ("Customer," "you," or "your") agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
                    </p>
                    <p className="mb-4">
                        <strong>Effective Date:</strong> These Terms are effective as of August 6, 2025.
                    </p>
                    <p className="mb-4">
                        <strong>Last Updated:</strong> November 18, 2025
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">2. DEFINITIONS</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>"Account"</strong> means your registered account on the Platform.</li>
                        <li><strong>"Customer"</strong> means the company or individual who registers for an account to use the Platform.</li>
                        <li><strong>"Customer Data"</strong> means all data, content, and information uploaded, transmitted, or processed through the Platform by you.</li>
                        <li><strong>"Documentation"</strong> means the user guides, technical manuals, and API documentation provided by us.</li>
                        <li><strong>"Intellectual Property Rights"</strong> means all intellectual property rights including patents, copyrights, trademarks, and trade secrets.</li>
                        <li><strong>"Platform"</strong> means the Prism AI Platform and all related services, software, and infrastructure.</li>
                        <li><strong>"Services"</strong> means the hosted Prism AI Platform and associated features provided by Ultraviolet.</li>
                        <li><strong>"Subscription Plan"</strong> means the selected monthly or yearly paid offering with specified limits and features.</li>
                        <li><strong>"User"</strong> means any person authorized by the Customer to access the Platform.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">3. ACCOUNT REGISTRATION</h2>
                    <p className="mb-4">To create an Account and use the Platform, you must:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>Be at least 18 years old (or the legal age of majority in your jurisdiction);</li>
                        <li>Have the legal capacity to enter into binding agreements;</li>
                        <li>Provide accurate, current, and complete registration information;</li>
                        <li>Maintain and update your account information;</li>
                        <li>Maintain the confidentiality and security of your login credentials;</li>
                        <li>Not share your account with others or allow unauthorized access.</li>
                    </ul>
                    <p className="mb-4">
                        You are fully responsible for all activities that occur under your Account, whether authorized by you or not. You must immediately notify us of any unauthorized use of your Account or any other breach of security.
                    </p>
                    <p className="mb-4">
                        We reserve the right to refuse registration or terminate Accounts at our sole discretion, particularly if we believe you have violated these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">4. ACCESS AND LICENSE</h2>
                    <p className="mb-4">
                        Subject to your compliance with these Terms and payment of applicable fees, Ultraviolet grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform in accordance with your selected Subscription Plan and these Terms.
                    </p>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">4.1 Permitted Use</h3>
                            <p className="mb-4">
                                You may use the Platform solely for your internal business purposes in accordance with the Documentation and your Subscription Plan limits.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">4.2 Restrictions</h3>
                            <p className="mb-4">You may not, and may not permit others to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Platform;</li>
                                <li>Copy, modify, adapt, alter, translate, or create derivative works of the Platform;</li>
                                <li>Rent, lease, sublicense, distribute, transfer, or resell access to the Platform;</li>
                                <li>Remove, alter, or obscure any proprietary notices on the Platform;</li>
                                <li>Circumvent or attempt to circumvent usage limits, security controls, or access restrictions;</li>
                                <li>Use the Platform to develop competing products or services;</li>
                                <li>Access the Platform through automated means except through our official APIs;</li>
                                <li>Interfere with or disrupt the Platform's operation or infrastructure.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">4.3 API Usage</h3>
                            <p className="mb-4">
                                Use of our APIs is subject to rate limits and usage restrictions as specified in your Subscription Plan and our API Documentation.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">5. SUBSCRIPTION AND PAYMENT</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">5.1 Subscription Plans</h3>
                            <p className="mb-4">
                                Access to paid features requires a valid Subscription Plan. We offer various subscription tiers with different features, usage limits, and pricing as described on our website.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">5.2 Billing and Fees</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>You agree to pay all fees associated with your selected Subscription Plan;</li>
                                <li>Fees are charged in advance on a recurring basis (monthly or annually) according to your billing cycle;</li>
                                <li>All fees are exclusive of applicable taxes, which you are responsible for;</li>
                                <li>Fees are non-refundable except as required by applicable law, as specified in these Terms, or as determined by us in cases of fraud, mistakes, or Terms violations;</li>
                                <li>We reserve the right to change our pricing with 30 days' notice.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">5.4 Payment Failure</h3>
                            <p className="mb-4">
                                If payment fails, we may suspend your access to paid features until payment is resolved. Continued payment failure may result in account termination. If your account is more than 10 days past due, access may be suspended until all past-due amounts are paid.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">5.5 Cancellation and Refunds</h3>
                            <p className="mb-4">
                                You may cancel your subscription at any time through your account settings or by contacting support. Cancellation takes effect at the end of your current billing period, and you will retain access to paid features until then. Refunds are generally not provided except as required by law or in cases determined by us involving fraud, errors, or violations of our Terms of Service.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">6. SERVICE LEVELS</h2>
                    <p className="mb-4">
                        We strive to provide reliable service availability but make no guarantees regarding uptime or performance unless specified in a separate Service Level Agreement (SLA).
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Target Availability:</strong> We aim for 99.5% monthly uptime for paid plans;</li>
                        <li><strong>Maintenance:</strong> Planned maintenance windows are excluded from availability calculations;</li>
                        <li><strong>Force Majeure:</strong> Downtime due to circumstances beyond our reasonable control is excluded;</li>
                        <li><strong>Enterprise SLAs:</strong> Custom SLAs may be available for Enterprise customers under separate agreements.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">7. CUSTOMER DATA</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">7.1 Data Ownership</h3>
                            <p className="mb-4">
                                You retain all rights, title, and interest in and to your Customer Data. We claim no ownership rights over your Customer Data.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">7.2 Data Processing License</h3>
                            <p className="mb-4">
                                You grant us a limited license to access, use, store, and process your Customer Data solely as necessary to provide the Services, including:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Storing and processing data through the Platform;</li>
                                <li>Providing technical support when requested;</li>
                                <li>Ensuring security and preventing abuse;</li>
                                <li>Complying with legal obligations.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">7.3 Data Security and Privacy</h3>
                            <p className="mb-4">
                                We implement appropriate technical and organizational measures to protect your Customer Data as described in our Privacy Policy. We will not access, use, or disclose your Customer Data except as permitted by these Terms or required by law.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">7.4 Data Backup and Recovery</h3>
                            <p className="mb-4">
                                While we perform regular backups, you are responsible for maintaining your own backups of critical data. We are not liable for data loss.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">8. ACCEPTABLE USE</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">8.1 Prohibited Activities</h3>
                            <p className="mb-4">You agree not to use the Platform to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Violate any applicable laws, regulations, or third-party rights;</li>
                                <li>Send spam, unsolicited communications, or malicious content;</li>
                                <li>Upload or transmit viruses, malware, or other harmful code;</li>
                                <li>Attempt to gain unauthorized access to our systems or other users' accounts;</li>
                                <li>Interfere with or disrupt the Platform's operation or infrastructure;</li>
                                <li>Use the Platform for cryptocurrency mining or similar resource-intensive activities;</li>
                                <li>Engage in any activity that could harm our reputation or business;</li>
                                <li>Violate the privacy or rights of others;</li>
                                <li>Market, advertise, or sell any prohibited products or services.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">8.2 Content Standards</h3>
                            <p className="mb-4">
                                Any content you upload or transmit through the Platform must not be illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">8.3 Enforcement</h3>
                            <p className="mb-4">
                                We reserve the right to investigate violations and take appropriate action, including suspending or terminating accounts, removing content, and cooperating with law enforcement.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">9. SUPPORT</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">9.1 Support Channels</h3>
                            <p className="mb-4">
                                We provide technical support through various channels including email, documentation, and community forums. Support availability and response times vary by Subscription Plan.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">9.2 Support Scope</h3>
                            <p className="mb-4">Our support covers:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4">
                                <li>Platform functionality and technical issues;</li>
                                <li>Account and billing questions;</li>
                                <li>General usage guidance and best practices.</li>
                            </ul>
                            <p className="mb-4">
                                Support does not include custom development, integration services, or troubleshooting of your applications unless separately agreed.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">9.3 Enterprise Support</h3>
                            <p className="mb-4">
                                Enterprise customers may receive enhanced support including dedicated support contacts, faster response times, and custom SLAs under separate agreements.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">10. TERM AND TERMINATION</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">10.1 Term</h3>
                            <p className="mb-4">
                                These Terms commence when you first access the Platform and continue until terminated in accordance with this section.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">10.2 Termination by You</h3>
                            <p className="mb-4">You may terminate these Terms at any time by:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Canceling your subscription through your account settings;</li>
                                <li>Contacting our support team;</li>
                                <li>Ceasing all use of the Platform.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">10.3 Termination by Us</h3>
                            <p className="mb-4">
                                We may terminate or suspend your access immediately, without prior notice, if you:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Violate these Terms or our Acceptable Use Policy;</li>
                                <li>Fail to pay fees when due;</li>
                                <li>Engage in fraudulent or illegal activities;</li>
                                <li>Pose a security risk to the Platform or other users.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">10.4 Effect of Termination</h3>
                            <p className="mb-4">Upon termination:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Your access to the Platform will cease;</li>
                                <li>Your Customer Data will be deleted according to our data retention policy;</li>
                                <li>You remain liable for all fees incurred prior to termination;</li>
                                <li>Sections that by their nature should survive will continue to apply.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">11. INTELLECTUAL PROPERTY</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">11.1 Our Intellectual Property</h3>
                            <p className="mb-4">
                                The Platform, including all software, content, trademarks, and other materials, is owned by Ultraviolet and protected by intellectual property laws. These Terms do not grant you any ownership rights in the Platform.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">11.2 Your Intellectual Property</h3>
                            <p className="mb-4">
                                You retain ownership of your Customer Data and any intellectual property rights therein. You are responsible for ensuring you have the necessary rights to use and upload your Customer Data.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">11.3 Feedback</h3>
                            <p className="mb-4">
                                Any feedback, suggestions, or ideas you provide about the Platform may be used by us without restriction or compensation to you.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">11.4 Third-Party Content</h3>
                            <p className="mb-4">
                                The Platform may include third-party content or links to third-party services. We are not responsible for such third-party content.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">12. DISCLAIMER AND LIMITATION OF LIABILITY</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">12.1 Disclaimer of Warranties</h3>
                            <p className="mb-4">
                                THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT;</li>
                                <li>THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE;</li>
                                <li>THAT DEFECTS WILL BE CORRECTED;</li>
                                <li>THAT THE PLATFORM WILL MEET YOUR REQUIREMENTS.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">12.2 Limitation of Liability</h3>
                            <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES;</li>
                                <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM;</li>
                                <li>WE ARE NOT LIABLE FOR DATA LOSS, BUSINESS INTERRUPTION, OR LOST PROFITS;</li>
                                <li>THESE LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">12.3 Exceptions</h3>
                            <p className="mb-4">
                                Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or other liability that cannot be excluded by law.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">13. GOVERNING LAW AND DISPUTE RESOLUTION</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">13.1 Governing Law</h3>
                            <p className="mb-4">
                                These Terms are governed by and construed in accordance with the laws of Serbia, without regard to conflict of law principles.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">13.2 Jurisdiction</h3>
                            <p className="mb-4">
                                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Belgrade, Serbia.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">13.3 Dispute Resolution Process</h3>
                            <p className="mb-4">
                                Before initiating formal legal proceedings, we encourage you to contact us to seek a resolution. We will attempt to resolve disputes through good faith negotiations.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">13.4 Class Action Waiver</h3>
                            <p className="mb-4">
                                To the extent permitted by law, you agree that disputes will be resolved on an individual basis and waive any right to participate in class action lawsuits.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">14. CONSUMER RIGHTS AND WITHDRAWAL</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">14.1 EU Consumer Rights</h3>
                            <p className="mb-4">
                                If you are a consumer in the European Union, you have certain rights under EU consumer protection laws that cannot be waived by these Terms.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">14.2 Right of Withdrawal</h3>
                            <p className="mb-4">
                                EU consumers have the right to withdraw from the contract within 14 days of subscription without giving any reason. However, if you begin using the Services during this period, you may lose this right of withdrawal.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">14.3 Statutory Warranties</h3>
                            <p className="mb-4">
                                Nothing in these Terms affects your statutory rights as a consumer, including rights related to defective services or unfair contract terms.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">15. CHANGES TO TERMS</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">15.1 Modification Rights</h3>
                            <p className="mb-4">
                                We reserve the right to modify these Terms at any time. When we make changes, we will:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Update the "Last Updated" date at the top of these Terms;</li>
                                <li>Notify you via email or through the Platform;</li>
                                <li>Provide at least 30 days' notice for material changes.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">15.2 Acceptance of Changes</h3>
                            <p className="mb-4">
                                Your continued use of the Platform after changes become effective constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Platform and may terminate your account.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">15.3 Previous Versions</h3>
                            <p className="mb-4">
                                Previous versions of these Terms are available upon request for your reference.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">16. CONTACT INFORMATION</h2>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">16.1 Company Information</h3>
                            <p className="mb-4">
                                <strong>Ultraviolet</strong><br />
                                Bulevar Arsenija Carnojevica 103<br />
                                11000 Belgrade, Serbia
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">16.2 Contact Methods</h3>
                            <p className="mb-2"><strong>Legal Questions:</strong> <a href="mailto:legal@ultraviolet.rs" className="text-primary hover:underline">legal@ultraviolet.rs</a></p>
                            <p className="mb-2"><strong>General Support:</strong> <a href="mailto:info@ultraviolet.rs" className="text-primary hover:underline">info@ultraviolet.rs</a></p>
                            <p className="mb-2"><strong>Privacy Questions:</strong> <a href="mailto:privacy@ultraviolet.rs" className="text-primary hover:underline">privacy@ultraviolet.rs</a></p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 mt-4">16.3 Response Times</h3>
                            <p className="mb-4">
                                We aim to respond to all inquiries within 2-3 business days. For urgent matters, please indicate the urgency in your subject line.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
