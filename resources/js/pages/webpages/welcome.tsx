import { ResponsiveNavbar } from '@/components/responsive-navbar';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Play, Music, Award, Users } from 'lucide-react';
import { SocialFab } from '@/components/social-fab';
import { Footer } from '@/components/footer';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <ResponsiveNavbar />
            <SocialFab/>
            
            {/* Video Hero Section */}
            <div className="relative min-h-screen bg-black">
                {/* Video Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover opacity-50"
                    >
                        <source src="/assets/videos/hero_bg.mp4" type="video/mp4" />
                        {/* Fallback background if video doesn't load */}
                    </video>
                    {/* Fallback gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-red-800/10 to-black/90"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex min-h-screen items-center justify-center">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="block">Welcome to</span>
                            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                Giileh Music
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-300 sm:text-xl md:text-2xl">
                            Experience the rhythm of life through our unique blend of traditional and modern sounds
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                            <button className="group flex items-center space-x-3 rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
                                <Play className="h-6 w-6" />
                                <span>Watch Latest Video</span>
                            </button>
                            <button className="rounded-full border-2 border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                                Listen Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-bounce">
                        <div className="h-8 w-6 rounded-full border-2 border-yellow-500 flex justify-center">
                            <div className="h-3 w-1 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="bg-gradient-to-t from-red-300 to-red-400 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                            Discover Our World
                        </h2>
                        <p className="mt-4 text-xl text-gray-300">
                            Explore the different aspects of our musical journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 - Latest Album */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-800 to-red-600 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
                                    <Music className="h-8 w-8 text-yellow-400" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-white">Latest Album</h3>
                                <p className="mb-6 text-gray-300">
                                    Experience our newest collection of tracks that blend traditional rhythms with contemporary beats.
                                </p>
                                <button className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
                                    Listen Now
                                </button>
                            </div>
                        </div>

                        {/* Card 2 - Awards & Recognition */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-700 to-red-500 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
                                    <Award className="h-8 w-8 text-yellow-400" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-white">Awards & Recognition</h3>
                                <p className="mb-6 text-gray-300">
                                    Celebrating our achievements and the recognition we've received for our contributions to music.
                                </p>
                                <button className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
                                    View Awards
                                </button>
                            </div>
                        </div>

                        {/* Card 3 - Community */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-400 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
                                    <Users className="h-8 w-8 text-yellow-400" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-white">Join Our Community</h3>
                                <p className="mb-6 text-gray-300">
                                    Connect with fellow music lovers and be part of our growing global community of fans.
                                </p>
                                <button className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
                                    Connect Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
