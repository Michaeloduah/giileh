import { Facebook, Instagram, Share2, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

export interface SocialLink {
    name: string;
    icon: React.ElementType;
    href: string;
    color: string;
}

interface SocialFabProps {
    className?: string;
}

export function SocialFab({ className }: SocialFabProps) {
    const [open, setOpen] = useState(false);

    const socialLinks: SocialLink[] = [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/giilehmusic', color: 'hover:bg-blue-600' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/giilehmusic', color: 'hover:bg-blue-400' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/giilehmusic', color: 'hover:bg-pink-600' },
        { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/giilehmusic', color: 'hover:bg-red-600' },
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/giilehmusic', color: 'hover:bg-blue-600' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/giilehmusic', color: 'hover:bg-blue-400' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/giilehmusic', color: 'hover:bg-pink-600' },
        { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/giilehmusic', color: 'hover:bg-red-600' },
    ];

    return (
        <div className={`fixed bottom-6 left-6 z-40 ${className ?? ''}`}>
            <div className="relative">
                {/* Social Media Menu */}
                <div
                    className="pointer-events-none absolute bottom-16 left-0 flex flex-col items-start space-y-2 transition-all duration-500"
                    style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(20px)' }}
                >
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                                style={{
                                    transitionDelay: open ? `${index * 80 + 100}ms` : '0ms',
                                    opacity: open ? 1 : 0,
                                    transform: open ? 'translateY(0)' : 'translateY(20px)',
                                }}
                                tabIndex={open ? 0 : -1}
                                aria-hidden={!open}
                            >
                                <Icon className="h-6 w-6" />
                            </a>
                        );
                    })}
                </div>
                {/* Main Social Button */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none ${open ? 'animate-spin-slow' : ''}`}
                    aria-label={open ? 'Close social links' : 'Open social links'}
                >
                    <span className={`transition-transform duration-500 ${open ? 'rotate-45' : ''}`}>
                        <Share2 className="h-7 w-7" />
                    </span>
                </button>
            </div>
        </div>
    );
}

// Add a slow spin animation for the open state
// In your global CSS (e.g., app.css), add:
// @keyframes spin-slow { 100% { transform: rotate(360deg); } }
// .animate-spin-slow { animation: spin-slow 1s linear; }
