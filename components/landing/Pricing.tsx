import Link from 'next/link';
import { Check } from 'lucide-react';

export function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Choose Your Plan</h2>
                    <p className="text-muted-foreground text-lg">Flexible pricing tailored to your security needs.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Trial/Free Plan */}
                    <div className="flex flex-col p-8 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-center mb-2">Trial</h3>
                        <div className="text-center mb-6">
                            <span className="text-4xl font-bold text-primary">Free</span>
                        </div>
                        <ul className="space-y-3 flex-1 mb-8">
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                <span className="text-sm">Managed or BYO CVM infrastructure</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                <span className="text-sm">Max 10 minutes per lifecycle (Managed)</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                <span className="text-sm">5 workspace members</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                <span className="text-sm">Community support</span>
                            </li>
                        </ul>
                        <Link
                            href="https://cloud.prism.ultraviolet.rs"
                            target="_blank"
                            className="w-full inline-flex h-10 items-center justify-center rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex flex-col p-8 rounded-2xl border border-primary/20 bg-card/50 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            RECOMMENDED
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">Enterprise</h3>
                        <div className="text-center mb-6">
                            <span className="text-4xl font-bold">Contact Us</span>
                        </div>
                        <ul className="space-y-3 flex-1 mb-8">
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                <span className="text-sm">Custom infrastructure allocation</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                <span className="text-sm">Unlimited members & runs</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                <span className="text-sm">Dedicated support & SLAs</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                <span className="text-sm">Custom integration options</span>
                            </li>
                        </ul>
                        <Link
                            href="mailto:info@ultraviolet.rs"
                            className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
