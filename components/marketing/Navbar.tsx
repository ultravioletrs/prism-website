'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/img/Prism_logo.png" alt="Prism AI" width={144} height={48} className="h-12 w-auto dark:invert" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
                            ABOUT
                        </Link>
                        <Link href="/#features" className="text-sm font-medium transition-colors hover:text-primary">
                            FEATURES
                        </Link>
                        <Link href="/#pricing" className="text-sm font-medium transition-colors hover:text-primary">
                            PRICING
                        </Link>
                        <Link href="/docs" className="text-sm font-medium transition-colors hover:text-primary">
                            DOCUMENTATION
                        </Link>
                        <Link href="https://medium.com/ultraviolet-blog" target="_blank" className="text-sm font-medium transition-colors hover:text-primary">
                            BLOG
                        </Link>
                        <Link href="https://github.com/ultravioletrs/cocos" target="_blank" className="text-muted-foreground hover:text-foreground">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://cloud.prism.ultraviolet.rs"
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Try Prism
                        </Link>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-muted-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

            </nav>

            {/* Mobile Nav */}
            {
                isOpen && (
                    <div className="fixed inset-0 top-16 z-50 w-full bg-background/95 backdrop-blur p-4 md:hidden overflow-y-auto">
                        <div className="flex flex-col space-y-4">
                            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
                                ABOUT
                            </Link>
                            <Link href="/#features" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
                                FEATURES
                            </Link>
                            <Link href="/#pricing" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
                                PRICING
                            </Link>
                            <Link href="/docs" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
                                DOCUMENTATION
                            </Link>
                            <Link href="https://medium.com/ultraviolet-blog" target="_blank" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
                                BLOG
                            </Link>
                            <Link
                                href="https://cloud.prism.ultraviolet.rs"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                                onClick={() => setIsOpen(false)}
                            >
                                Try Prism
                            </Link>
                            <div className="flex justify-center pt-4">
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
