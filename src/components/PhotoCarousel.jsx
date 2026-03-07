import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useFadeIn } from '../hooks/useFadeIn';

const PLACEHOLDER_PHOTOS = [
  { src: '/photos/carousel/1976.jpg', alt: 'Bob and Sherry, 1976', caption: '1976' },
  { src: '/photos/carousel/1980s.jpg', alt: 'Bob and Sherry, 1980s', caption: '1980s' },
  { src: '/photos/carousel/1990s.jpg', alt: 'Bob and Sherry, 1990s', caption: '1990s' },
  { src: '/photos/carousel/2000s.jpg', alt: 'Bob and Sherry, 2000s', caption: '2000s' },
  { src: '/photos/carousel/2010s.jpg', alt: 'Bob and Sherry, 2010s', caption: '2010s' },
  { src: '/photos/carousel/2020s.jpg', alt: 'Bob and Sherry, 2020s', caption: '2020s' },
];

export default function PhotoCarousel() {
  const fadeRef = useFadeIn();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-charcoal-900">
      <div ref={fadeRef} className="fade-in">
        <h2 className="font-display text-3xl md:text-4xl text-cream-100 text-center font-light mb-2">
          Through the Years
        </h2>
        <div className="section-divider !bg-gold-400/60 mb-10" />

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Carousel viewport */}
          <div className="overflow-hidden rounded-sm" ref={emblaRef}>
            <div className="flex">
              {PLACEHOLDER_PHOTOS.map((photo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-2"
                >
                  <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-charcoal-800');
                        e.target.parentElement.innerHTML = `
                          <div class="flex items-center justify-center h-full text-cream-200/30 font-display text-2xl">
                            ${photo.caption}
                          </div>
                        `;
                      }}
                    />
                  </div>
                  {photo.caption && (
                    <p className="text-center text-cream-200/50 font-body text-sm mt-3 tracking-wide">
                      {photo.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous photo"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 w-10 h-10 flex items-center justify-center text-cream-200/60 hover:text-cream-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next photo"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 w-10 h-10 flex items-center justify-center text-cream-200/60 hover:text-cream-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {PLACEHOLDER_PHOTOS.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to photo ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-gold-400 w-4'
                    : 'bg-cream-200/30 hover:bg-cream-200/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
