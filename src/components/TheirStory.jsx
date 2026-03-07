import { useFadeIn } from '../hooks/useFadeIn';

export default function TheirStory() {
  const ref = useFadeIn();

  return (
    <section className="py-20 md:py-28 px-6 bg-cream-200/40">
      <div ref={ref} className="fade-in max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-charcoal-800 font-light mb-2">
          Their Story
        </h2>
        <div className="section-divider mb-10" />

        <p className="font-body text-base md:text-lg leading-relaxed text-charcoal-700/80">
          Fifty years ago, Bob and Sherry began a journey together that would be
          filled with love, laughter, and a lifetime of memories. From their
          wedding day in 1976 to today, their partnership has been the foundation
          of a family built on warmth, generosity, and devotion.
        </p>
        <p className="font-body text-base md:text-lg leading-relaxed text-charcoal-700/80 mt-6">
          Please join us as we celebrate this remarkable milestone.
        </p>

        <p className="font-body text-xs text-charcoal-700/40 mt-10 italic">
          [Keith — replace this placeholder text with your own words]
        </p>
      </div>
    </section>
  );
}
