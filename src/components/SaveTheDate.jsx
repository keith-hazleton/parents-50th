import { SITE_CONFIG } from '../config';
import { useFadeIn } from '../hooks/useFadeIn';

export default function SaveTheDate() {
  const ref = useFadeIn();
  const { phase } = SITE_CONFIG;

  return (
    <section className="py-20 md:py-28 px-6">
      <div
        ref={ref}
        className="fade-in max-w-md mx-auto text-center border border-gold-300/50 rounded-sm px-10 py-14 md:px-14 md:py-18 bg-cream-100/50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-gold-600 mb-6">
          {phase === 1 ? 'Please join us' : 'You are invited'}
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal-800 mb-8">
          {phase === 1 ? 'Save the Date' : 'Celebration Details'}
        </h2>

        <div className="section-divider !my-6" />

        <p className="font-display text-2xl md:text-3xl text-charcoal-800 font-light mb-2">
          {SITE_CONFIG.eventDate}
        </p>
        {phase >= 2 && SITE_CONFIG.eventTime && (
          <p className="font-body text-lg text-charcoal-700/80 tracking-wide mb-1">
            {SITE_CONFIG.eventTime}
          </p>
        )}

        {phase >= 2 ? (
          <div className="mt-6">
            <a
              href={SITE_CONFIG.venueWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-base text-charcoal-800 hover:text-gold-600 transition-colors tracking-wide block mb-1"
            >
              {SITE_CONFIG.eventLocation}
            </a>
            <p className="font-body text-sm text-charcoal-700/70 tracking-wide">
              {SITE_CONFIG.eventAddress}
            </p>
            <p className="font-body text-sm text-charcoal-700/70 tracking-wide mb-8">
              {SITE_CONFIG.eventCity} {SITE_CONFIG.eventZip}
            </p>
          </div>
        ) : (
          <p className="font-body text-base text-charcoal-700/80 tracking-wide mb-8">
            {SITE_CONFIG.eventCity}
          </p>
        )}

        <div className="section-divider !my-6" />

        {phase === 1 ? (
          <>
            <p className="font-body text-sm text-charcoal-700/60 italic tracking-wide">
              Formal invitation to follow
            </p>
            <p className="font-body text-sm text-charcoal-700/50 mt-4 tracking-wide">
              We respectfully request an adults-only evening
            </p>
          </>
        ) : (
          <>
            <p className="font-body text-sm text-charcoal-700/60 italic tracking-wide mb-3">
              Your presence is the only gift we need
            </p>
            <p className="font-body text-sm text-charcoal-700/50 tracking-wide">
              We respectfully request an adults-only evening
            </p>
          </>
        )}
      </div>
    </section>
  );
}
