import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t py-12 text-sm">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-bold text-lg mb-4">Ultraviolet</h3>
                        <p className="text-muted-foreground">
                            Specializing in confidential computing, cloud security, AI/ML, and secure data sharing.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#features" className="text-muted-foreground hover:text-primary">Features</Link></li>
                            <li><Link href="/docs" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
                            <li><Link href="https://cloud.prism.ultraviolet.rs" className="text-muted-foreground hover:text-primary">Prism Cloud</Link></li>
                            <li><Link href="https://github.com/ultravioletrs/cocos" className="text-muted-foreground hover:text-primary">Cocos AI (Open Source)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/imprint" className="text-muted-foreground hover:text-primary">Imprint</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li><Link href="https://twitter.com/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary">Twitter</Link></li>
                            <li><Link href="https://linkedin.com/company/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary">LinkedIn</Link></li>
                            <li><Link href="https://github.com/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary">GitHub</Link></li>
                            <li><Link href="mailto:info@ultraviolet.rs" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Ultraviolet. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
