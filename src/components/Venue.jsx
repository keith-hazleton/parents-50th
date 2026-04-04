import { SITE_CONFIG } from '../config';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Venue() {
  const ref = useFadeIn();
  const { venueCoordinates, eventLocation, eventAddress, eventCity, eventZip, timeline } = SITE_CONFIG;

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${venueCoordinates.lon - 0.005},${venueCoordinates.lat - 0.003},${venueCoordinates.lon + 0.005},${venueCoordinates.lat + 0.003}&layer=mapnik&marker=${venueCoordinates.lat},${venueCoordinates.lon}`;

  return (
    <section className="py-20 md:py-28 px-6 bg-cream-50">
      <div ref={ref} className="fade-in max-w-4xl mx-auto">
        <h2 className="section-heading">Venue & Details</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Map */}
          <div className="space-y-6">
            <iframe
              title="Venue Location Map"
              src={mapSrc}
              className="w-full h-64 md:h-80 border border-gold-300/30 rounded-sm"
              frameBorder="0"
              scrolling="no"
            />
            <div className="text-center">
              <a
                href={`https://www.openstreetmap.org/?mlat=${venueCoordinates.lat}&mlon=${venueCoordinates.lon}#map=17/${venueCoordinates.lat}/${venueCoordinates.lon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gold-600 hover:text-gold-700 tracking-wide underline"
              >
                View larger map
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl text-charcoal-800 mb-4">Location</h3>
              <p className="font-body text-charcoal-800 leading-relaxed">
                {eventLocation}
              </p>
              <p className="font-body text-charcoal-700/80 leading-relaxed">
                {eventAddress}
              </p>
              <p className="font-body text-charcoal-700/80 leading-relaxed">
                {eventCity} {eventZip}
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-charcoal-800 mb-4">Parking</h3>
              <p className="font-body text-charcoal-700/80 leading-relaxed">
                Plenty of street and public parking available nearby on Washington Avenue and surrounding streets.
              </p>
            </div>

            {timeline && timeline.length > 0 && (
              <div>
                <h3 className="font-display text-2xl text-charcoal-800 mb-4">Timeline</h3>
                <div className="space-y-3">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="font-body text-charcoal-700/60 tracking-wide min-w-[80px]">
                        {item.time}
                      </span>
                      <span className="font-body text-charcoal-800">
                        {item.event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
