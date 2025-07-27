import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import AppLogo from './app-logo';

const navItems: NavItem[] = [
    { title: 'Home', href: '/', icon: null },
    { title: 'Profile', href: '/profile', icon: null },
    { title: 'Discography', href: '/discography', icon: null },
    { title: 'Awards', href: '/awards', icon: null },
    { title: 'Media', href: '/media', icon: null },
    { title: 'News', href: '/news', icon: null },
    { title: 'Connect', href: '/connect', icon: null },
];

export function ResponsiveNavbar({ className }: { className?: string }) {
    const page = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const isActive = (href: string) => page.url === href;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
            setShowBackToTop(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav 
                className={cn(
                    'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out p-5',
                    isScrolled 
                        ? 'bg-gradient-to-b from-red-900/90 to-black/90 backdrop-blur-md shadow-lg' 
                        : 'bg-transparent',
                    className
                )}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <AppLogo />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className={cn(
                                            'rounded-md px-3 py-2 text-sm font-medium text-yellow-500 transition-colors duration-200',
                                            isActive(item.href)
                                                ? 'bg-opacity-20 bg-black text-yellow-400'
                                                : 'hover:bg-opacity-10 hover:bg-black hover:text-yellow-400',
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-opacity-20 inline-flex items-center justify-center rounded-md p-2 text-yellow-500 hover:bg-black focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:ring-inset"
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        <Menu className="block h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-full bg-gradient-to-b from-red-900 to-red-600">
                                    <SheetHeader className="flex items-center justify-between">
                                        <SheetTitle className="text-lg font-semibold text-yellow-500">Menu</SheetTitle>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="hover:bg-opacity-20 text-yellow-500 hover:bg-black"
                                        >
                                            <X className="h-6 w-6" />
                                        </Button>
                                    </SheetHeader>

                                    <div className="mt-8 space-y-4">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={cn(
                                                    'block rounded-md px-3 py-2 text-base font-medium text-yellow-500 transition-colors duration-200',
                                                    isActive(item.href)
                                                        ? 'bg-opacity-20 bg-black text-yellow-400'
                                                        : 'hover:bg-opacity-10 hover:bg-black hover:text-yellow-400',
                                                )}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}

                                        <div className="border-opacity-20 border-t border-yellow-500 pt-4">
                                            <div className="space-y-2">
                                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                                    <Button
                                                        variant="ghost"
                                                        className="hover:bg-opacity-20 w-full justify-start text-yellow-500 hover:bg-black"
                                                    >
                                                        Sign In
                                                    </Button>
                                                </Link>
                                                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                                                    <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">Get Started</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Back to Top Button - Bottom Right */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-yellow-500 text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-yellow-400"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </>
    );
}
