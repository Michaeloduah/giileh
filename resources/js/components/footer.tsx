import { Link } from '@inertiajs/react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLogo from './app-logo';

const footerLinks = {
    navigation: [
        { name: 'Home', href: '/' },
        { name: 'Profile', href: '/profile' },
        { name: 'Discography', href: '/discography' },
        { name: 'Awards', href: '/awards' },
        { name: 'Media', href: '/media' },
        { name: 'News', href: '/news' },
        { name: 'Connect', href: '/connect' },
    ],
    support: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
    ],
    social: [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/giilehmusic', color: 'hover:bg-blue-600' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/giilehmusic', color: 'hover:bg-blue-400' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/giilehmusic', color: 'hover:bg-pink-600' },
        { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/giilehmusic', color: 'hover:bg-red-600' },
    ],
};

const contactInfo = [
    { icon: Mail, text: 'info@giilehmusic.com', href: 'mailto:info@giilehmusic.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 Music Street, City, Country', href: '#' },
];

export function Footer() {
    return (
        <footer className="bg-gradient-to-t from-red-900/50 to-red-600/50 text-white">
            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <AppLogo />
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Experience the rhythm of life through our unique blend of traditional and modern sounds. 
                            Join our community and discover the magic of Giileh Music.
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex space-x-4">
                            {footerLinks.social.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black transition-all duration-300 hover:scale-110 ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-500 mb-6">Navigation</h3>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-500 mb-6">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-500 mb-6">Contact & Newsletter</h3>
                        
                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            {contactInfo.map((contact, index) => {
                                const Icon = contact.icon;
                                return (
                                    <a
                                        key={index}
                                        href={contact.href}
                                        className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                                    >
                                        <Icon className="w-4 h-4 text-yellow-500" />
                                        <span className="text-sm">{contact.text}</span>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Newsletter Signup */}
                        <div>
                            <h4 className="text-sm font-medium text-yellow-500 mb-3">Stay Updated</h4>
                            <div className="flex space-x-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-2 bg-red-800/50 border border-red-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                />
                                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-3">
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-red-800">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 md:flex-row md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Giileh Music. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 