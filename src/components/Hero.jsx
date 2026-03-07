import { SITE_CONFIG } from '../config';

export default function Hero() {
  const isPostEvent = SITE_CONFIG.phase === 3;

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with warm overlay */}
      <div className="absolute inset-0">
        <img
          src="/photos/hero/wedding.jpg"
          alt="Bob and Sherry Hazleton on their wedding day, 1976"
          className="w-full h-full object-cover"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-charcoal-900/30 to-charcoal-900/60" />
        {/* Sepia warmth */}
        <div className="absolute inset-0 bg-amber-900/15 mix-blend-multiply" />
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-cream-50 tracking-wide">
          Bob <span className="font-light italic text-gold-200">&</span> Sherry
        </h1>
        <div className="section-divider mt-6 mb-4 !bg-gold-200" />
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-gold-200 tracking-[0.2em] uppercase font-light">
          {isPostEvent ? 'Celebrating Fifty Years' : 'Fifty Years'}
        </p>
        <p className="font-display text-lg sm:text-xl text-cream-200 mt-3 tracking-widest font-light">
          1976 &mdash; 2026
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-cream-200/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
