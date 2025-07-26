import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react';

export interface NewsArticle {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    publishDate: string;
    category: string;
    readTime: string;
}

interface NewsSliderProps {
    articles: NewsArticle[];
    title?: string;
    subtitle?: string;
}

export function NewsSlider({ articles, title = "Latest News", subtitle = "Stay updated with our latest stories" }: NewsSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === articles.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? articles.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section className="py-20 bg-gradient-to-t from-red-300 to-red-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-300">
                        {subtitle}
                    </p>
                </div>

                <div className="relative">
                    {/* Slider Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-400 to-red-300">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {articles.map((article) => (
                                <div key={article.id} className="w-full flex-shrink-0">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Article Image */}
                                        <div className="w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden">
                                            <img 
                                                src={article.image} 
                                                alt={article.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* Article Content */}
                                        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                                            <div className="mb-4">
                                                <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-full">
                                                    {article.category}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 line-clamp-2">
                                                {article.title}
                                            </h3>
                                            
                                            <p className="text-gray-300 mb-6 line-clamp-3">
                                                {article.excerpt}
                                            </p>

                                            <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                                                <div className="flex items-center space-x-2">
                                                    <User className="w-4 h-4" />
                                                    <span>{article.author}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{article.publishDate}</span>
                                                </div>
                                                <span>{article.readTime} read</span>
                                            </div>

                                            <button className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 w-fit">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button 
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        
                        <button 
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {articles.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-yellow-500 scale-125' 
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 