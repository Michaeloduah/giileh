import { Music, Play } from 'lucide-react';

export interface Album {
    id: string;
    title: string;
    artist: string;
    coverImage: string;
    releaseDate: string;
    genre: string;
    tracks: number;
}

interface AlbumsSectionProps {
    albums: Album[];
    title?: string;
    subtitle?: string;
}

export function AlbumsSection({ albums, title = "Latest Albums", subtitle = "Discover our newest releases" }: AlbumsSectionProps) {
    return (
        <section className="py-20 bg-gradient-to-b from-red-300 to-red-400 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-300">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {albums.map((album) => (
                        <div key={album.id} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-700 to-red-600 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            
                            {/* Album Cover */}
                            <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                                <img 
                                    src={album.coverImage} 
                                    alt={album.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300">
                                        <Play className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Album Info */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                                    {album.title}
                                </h3>
                                <p className="text-yellow-400 font-medium mb-2">
                                    {album.artist}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
                                    <span>{album.genre}</span>
                                    <span>{album.tracks} tracks</span>
                                </div>
                                <p className="text-sm text-gray-400">
                                    Released {album.releaseDate}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}