import { Award, Music, Users, Globe } from 'lucide-react';

interface AboutSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    stats?: Array<{
        icon: React.ElementType;
        number: string;
        label: string;
    }>;
}

export function AboutSection({ 
    title = "About Giileh Music", 
    subtitle = "Our Story",
    description = "Giileh Music is more than just a record label – we're a movement that celebrates the rich tapestry of musical traditions while embracing the innovations of modern sound. Founded with a passion for authentic expression, we've been at the forefront of blending traditional rhythms with contemporary beats, creating a unique sonic experience that resonates with audiences worldwide.",
    image = "/assets/images/about-giileh.jpg",
    stats = [
        { icon: Award, number: "50+", label: "Awards Won" },
        { icon: Music, number: "200+", label: "Songs Released" },
        { icon: Users, number: "1M+", label: "Fans Worldwide" },
        { icon: Globe, number: "25+", label: "Countries Reached" },
    ]
}: AboutSectionProps) {
    return (
        <section className="py-20 bg-gradient-to-b from-red-300 to-red-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-white">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-white leading-relaxed mb-6">
                                {description}
                            </p>
                            
                            <p className="text-white leading-relaxed mb-6">
                                Our journey began with a simple belief: that music has the power to transcend boundaries, 
                                unite cultures, and tell stories that need to be heard. From our humble beginnings in a 
                                small studio, we've grown into a global platform that champions diverse voices and 
                                innovative sounds.
                            </p>
                            
                            <p className="text-white leading-relaxed">
                                Today, we continue to push the boundaries of what's possible in music, collaborating 
                                with artists from around the world to create experiences that move the soul and inspire 
                                the spirit. Join us on this incredible journey as we write the next chapter in the 
                                story of music.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 pt-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="text-center">
                                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-yellow-500/20">
                                            <Icon className="w-6 h-6 text-yellow-400" />
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-white">
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img 
                                src={image} 
                                alt="About Giileh Music"
                                className="w-full h-96 lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>

                {/* Mission Statement */}
                {/* <div className="mt-16 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Our Mission
                        </h3>
                        <p className="text-lg text-white leading-relaxed">
                            To create a world where every voice can be heard, every story can be told, and every 
                            rhythm can find its place in the universal symphony of human expression. We believe 
                            in the power of music to heal, inspire, and transform lives.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}