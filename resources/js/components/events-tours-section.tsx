import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    venue: string;
    image: string;
    ticketPrice: string;
    status: 'upcoming' | 'sold-out' | 'cancelled';
}

interface EventsToursSectionProps {
    events: Event[];
    title?: string;
    subtitle?: string;
}

export function EventsToursSection({ events, title = "Events & Tours", subtitle = "Join us live on stage" }: EventsToursSectionProps) {
    const getStatusColor = (status: Event['status']) => {
        switch (status) {
            case 'upcoming': return 'bg-green-500';
            case 'sold-out': return 'bg-red-500';
            case 'cancelled': return 'bg-gray-500';
            default: return 'bg-gray-500';
        }
    };

    const getStatusText = (status: Event['status']) => {
        switch (status) {
            case 'upcoming': return 'Tickets Available';
            case 'sold-out': return 'Sold Out';
            case 'cancelled': return 'Cancelled';
            default: return 'Unknown';
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-red-300 to-red-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-300">
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-6">
                    {events.map((event) => (
                        <div key={event.id} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-400 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                                {/* Event Image */}
                                <div className="w-full lg:w-48 h-32 lg:h-24 overflow-hidden rounded-xl flex-shrink-0">
                                    <img 
                                        src={event.image} 
                                        alt={event.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Event Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {event.title}
                                        </h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(event.status)}`}>
                                            {getStatusText(event.status)}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4 text-yellow-400" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-yellow-400" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="w-4 h-4 text-yellow-400" />
                                            <span className="truncate">{event.venue}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center space-x-2 text-yellow-400">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{event.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Ticket className="w-4 h-4 text-yellow-400" />
                                            <span className="text-sm font-semibold text-white">{event.ticketPrice}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="flex-shrink-0">
                                    <button 
                                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                            event.status === 'upcoming' 
                                                ? 'bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105' 
                                                : 'bg-gray-500 text-white cursor-not-allowed'
                                        }`}
                                        disabled={event.status !== 'upcoming'}
                                    >
                                        {event.status === 'upcoming' ? 'Get Tickets' : getStatusText(event.status)}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 