import { AboutSection } from '@/components/about-section';
import { AlbumsSection, type Album } from '@/components/albums-section';
import { EventsToursSection, type Event } from '@/components/events-tours-section';
import { Footer } from '@/components/footer';
import { NewsSlider, type NewsArticle } from '@/components/news-slider';
import { ResponsiveNavbar } from '@/components/responsive-navbar';
import { SinglesSection, type Single } from '@/components/singles-section';
import { SocialFab } from '@/components/social-fab';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Award, Music, Play, Users } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    // Sample data for Albums
    const albums: Album[] = [
        {
            id: '1',
            title: 'Rhythm of Life',
            artist: 'Giileh',
            coverImage: '/assets/images/album1.jpg',
            releaseDate: 'March 15, 2024',
            genre: 'Afro-Fusion',
            tracks: 12,
        },
        {
            id: '2',
            title: 'Echoes of Tradition',
            artist: 'Giileh',
            coverImage: '/assets/images/album2.jpg',
            releaseDate: 'January 20, 2024',
            genre: 'World Music',
            tracks: 10,
        },
        {
            id: '3',
            title: 'Modern Beats',
            artist: 'Giileh',
            coverImage: '/assets/images/album3.jpg',
            releaseDate: 'November 8, 2023',
            genre: 'Contemporary',
            tracks: 8,
        },
        {
            id: '4',
            title: 'Soul Journey',
            artist: 'Giileh',
            coverImage: '/assets/images/album4.jpg',
            releaseDate: 'September 12, 2023',
            genre: 'Soul',
            tracks: 14,
        },
    ];

    // Sample data for Singles
    const singles: Single[] = [
        {
            id: '1',
            title: 'Dance of the Sun',
            artist: 'Giileh',
            coverImage: '/assets/images/single1.jpg',
            releaseDate: 'April 1, 2024',
            genre: 'Afro-Pop',
            duration: '3:45',
        },
        {
            id: '2',
            title: 'Midnight Groove',
            artist: 'Giileh',
            coverImage: '/assets/images/single2.jpg',
            releaseDate: 'March 20, 2024',
            genre: 'Jazz-Fusion',
            duration: '4:12',
        },
        {
            id: '3',
            title: 'Urban Rhythm',
            artist: 'Giileh',
            coverImage: '/assets/images/single3.jpg',
            releaseDate: 'February 15, 2024',
            genre: 'Hip-Hop',
            duration: '3:28',
        },
        {
            id: '4',
            title: 'Ocean Waves',
            artist: 'Giileh',
            coverImage: '/assets/images/single4.jpg',
            releaseDate: 'January 30, 2024',
            genre: 'Ambient',
            duration: '5:20',
        },
    ];

    // Sample data for Events & Tours
    const events: Event[] = [
        {
            id: '1',
            title: 'Summer Festival 2024',
            date: 'July 15, 2024',
            time: '8:00 PM',
            location: 'New York, NY',
            venue: 'Central Park',
            image: '/assets/images/event1.jpg',
            ticketPrice: '$45',
            status: 'upcoming',
        },
        {
            id: '2',
            title: 'World Tour - London',
            date: 'August 22, 2024',
            time: '7:30 PM',
            location: 'London, UK',
            venue: 'Royal Albert Hall',
            image: '/assets/images/event2.jpg',
            ticketPrice: '£35',
            status: 'upcoming',
        },
        {
            id: '3',
            title: 'Jazz Night',
            date: 'June 10, 2024',
            time: '9:00 PM',
            location: 'Chicago, IL',
            venue: 'Blue Note Club',
            image: '/assets/images/event3.jpg',
            ticketPrice: '$25',
            status: 'sold-out',
        },
        {
            id: '4',
            title: 'Acoustic Session',
            date: 'May 5, 2024',
            time: '6:00 PM',
            location: 'Los Angeles, CA',
            venue: 'The Troubadour',
            image: '/assets/images/event4.jpg',
            ticketPrice: '$30',
            status: 'upcoming',
        },
    ];

    // Sample data for News
    const newsArticles: NewsArticle[] = [
        {
            id: '1',
            title: 'Giileh Music Wins Best World Music Album at Grammy Awards',
            excerpt:
                'We are thrilled to announce that our latest album "Rhythm of Life" has won the prestigious Grammy Award for Best World Music Album. This recognition celebrates our commitment to blending traditional and modern sounds.',
            content: 'Full article content here...',
            image: '/assets/images/news1.jpg',
            author: 'Music Team',
            publishDate: 'March 15, 2024',
            category: 'Awards',
            readTime: '5 min',
        },
        {
            id: '2',
            title: 'Behind the Scenes: Recording Our Latest Single',
            excerpt:
                'Take an exclusive look at the creative process behind our newest single "Dance of the Sun". From studio sessions to final production, discover how we bring our musical vision to life.',
            content: 'Full article content here...',
            image: '/assets/images/news2.jpg',
            author: 'Studio Team',
            publishDate: 'April 1, 2024',
            category: 'Behind the Scenes',
            readTime: '8 min',
        },
        {
            id: '3',
            title: 'Upcoming World Tour Announced for 2024',
            excerpt:
                'Get ready for an unforgettable musical journey as we announce our 2024 World Tour. Spanning 25 countries, this tour will bring our unique sound to fans around the globe.',
            content: 'Full article content here...',
            image: '/assets/images/news3.jpg',
            author: 'Tour Manager',
            publishDate: 'March 25, 2024',
            category: 'Tour',
            readTime: '6 min',
        },
    ];

    return (
        <>
            <ResponsiveNavbar />
            <SocialFab />

            {/* Video Hero Section */}
            <div className="relative min-h-screen bg-black">
                {/* Video Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-50">
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
                            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Giileh Music</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-300 sm:text-xl md:text-2xl">
                            Experience the rhythm of life through our unique blend of traditional and modern sounds
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                            <button className="group flex items-center space-x-3 rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
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
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
                    <div className="animate-bounce">
                        <div className="flex h-8 w-6 justify-center rounded-full border-2 border-yellow-500">
                            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-yellow-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="bg-gradient-to-t from-red-300 to-red-400 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Discover Our World</h2>
                        <p className="mt-4 text-xl text-gray-300">Explore the different aspects of our musical journey</p>
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
                                <button className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
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
                                <button className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
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
                                <button className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
                                    Connect Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Albums Section */}
            <AlbumsSection albums={albums} />

            {/* Singles Section */}
            <SinglesSection singles={singles} />

            {/* Events & Tours Section */}
            <EventsToursSection events={events} />

            {/* News Slider */}
            <NewsSlider articles={newsArticles} />

            {/* About Section */}
            <AboutSection />

            <Footer />
        </>
    );
}
