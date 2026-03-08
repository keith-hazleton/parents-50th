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
          On August 7, 1976, near our nation's capital, Bob and Sherry said "I do" and began a journey together. The
          next 50 years would take them across the country to Oregon to amazing friends, bringing two loving sons,
          three adoring granddaughters, and countless camping adventures.
          From their wedding day to today, their partnership has been the foundation
          of a family built on care, generosity, and friendship.
        </p>
        <p className="font-body text-base md:text-lg leading-relaxed text-charcoal-700/80 mt-6">
          Please join us as we celebrate this remarkable milestone.
        </p>
      </div>
    </section>
  );
}
