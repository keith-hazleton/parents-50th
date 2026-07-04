export const SITE_CONFIG = {
  phase: 2, // 1 = save-the-date, 2 = full-event, 3 = post-event
  eventDate: 'August 8, 2026',
  eventTime: '5:30 PM', // Update when confirmed
  eventLocation: 'del Alma Restaurant',
  eventAddress: '136 SW Washington Ave. Suite 102',
  eventCity: 'Corvallis, Oregon',
  eventZip: '97333',
  venueWebsite: 'https://delalmarestaurant.com',
  venueCoordinates: { lat: 44.5646, lon: -123.2620 }, // For map embed
  photoAlbumUrl: '', // Post-event photo sharing link
  timeline: [
    { time: '5:30 PM', event: 'Wine station & tapas' },
    { time: '', event: 'Dinner to follow' },
    { time: '7:30 PM', event: 'Celebrations' },
  ],
};
